import { useEffect, useState } from "react";
import { social } from "../data/social";
import LinkInput from "./LinkInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeApi";
import type { SocialNetwork, User } from "../types";

export default function LinkTreeView() {

    const [treeLinks, setTreeLinks] = useState(social);

    const queryClient = useQueryClient();
    const user: User = queryClient.getQueryData(['user'])!;

    const { mutate } = useMutation({
        mutationFn: updateProfile,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: () => {
            toast.success('Actualizado correctamente')
        }
    })

    useEffect(() => {
        const updatedData = treeLinks.map((item) => {
            const userLink = JSON.parse(user.links).find((link: SocialNetwork) => link.name === item.name)
            if (userLink) {
                return { ...item, url: userLink.url, enabled: userLink.enabled }
            }
            return item
        })
        setTreeLinks(updatedData)
    }, [user])


    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedLinks = treeLinks.map(item => item.name === e.target.name ? { ...item, url: e.target.value } : item)
        setTreeLinks(updatedLinks);
    }

    //Creamos una copia de la información de la base de datos
    const links: SocialNetwork[] = JSON.parse(user.links);
    console.log('Links', links);

    //Función que gestiona el cambio de activación de los links
    const handleEnableLink = (socialName: string) => {

        //updateEnable dará como resultado el objeto de la red social modificada
        const updatedEnabled = treeLinks.map(item => {
            //Si el nombre de la red social en el botón y en el objeto inicial son iguales
            if (item.name === socialName) {
                // Si, además, es una URL correcta
                if (isValidUrl(item.url)) {
                    //Retornamos el objeto completo con el campo enabled modificado
                    return { ...item, enabled: !item.enabled }
                } else {
                    // Si no es una URL válida, mensaje de error
                    toast.error('URL no válida');
                }
            }
            return item
        })

        // Almacenamos en el estado el array completo con la red social actualizada
        setTreeLinks(updatedEnabled);

        // Creamos un array vacío que incluirá una copia de las redes sociales "enabled"
        let updatedItems: SocialNetwork[] = [];

        // Encontramos las red social que estamos modificando en el array
        const selectedSocialNetwork = updatedEnabled.find(link => link.name === socialName);

        // Si lo estás habilitando
        if (selectedSocialNetwork?.enabled) {
            //Filtramos los links metidos en el array copia y calculamos su lenght. El id será eso + 1
            const id = links.filter(link => link.id).length + 1

            //Si 
            if (links.some(link => link.name === socialName)) {
                updatedItems = links.map(link => {
                    if (link.name === socialName) {
                        return {
                            ...link,
                            enabled: true,
                            id: id
                        }
                    } else {
                        return link
                    }
                })
            } else {
                const newItem: SocialNetwork = { ...selectedSocialNetwork, id: id }
                updatedItems = [...links, newItem];
            }

        } else {
            const idToUpdate = links.find((link) => link.name === socialName)?.id;
            updatedItems = links.map(link => {
                if (link.name === socialName) {
                    return {
                        ...link,
                        id: 0,
                        enabled: false
                    }
                } else if (link.id > idToUpdate!) {
                    return {
                        ...link,
                        id: link.id - 1
                    }
                } else {
                    return link
                }
            })
        }

        //Guarda la nueva disposición de links "enabled" en el cache para mejorar la rapidez en el front
        queryClient.setQueryData(['user'], (prevData: User) => {
            return {
                ...prevData,
                links: JSON.stringify(updatedItems)
            }
        })
    }

    return (
        <div className="space-y-5">
            {treeLinks.map(item => (
                <LinkInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                    handleEnableLink={handleEnableLink}
                />
            ))}
            <button
                className="bg-orange hover:bg-orange-light p-2 text-lg w-full text-dark rounded font-bold"
                onClick={() => mutate(queryClient.getQueryData(['user'])!)}
            >
                GUARDAR CAMBIOS
            </button>
        </div>
    )
}
