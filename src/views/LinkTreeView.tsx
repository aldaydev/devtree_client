import { useEffect, useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "./DevTreeInput";
import { isValidUrl } from "../utils";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../api/DevTreeApi";
import type { SocialNetwork, User } from "../types";

export default function LinkTreeView() {

const [devTreeLinks, setDevTreeLinks] = useState(social);

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
    const updatedData = devTreeLinks.map((item) => {
        const userLink = JSON.parse(user.links).find((link: SocialNetwork) => link.name === item.name)
        if(userLink){
            return {...item, url: userLink.url, enabled: userLink.enabled}
        }
        return item
    })
    setDevTreeLinks(updatedData)
}, [user])

const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(item => item.name === e.target.name ? {...item, url: e.target.value } : item)
    setDevTreeLinks(updatedLinks);
    
    // queryClient.setQueryData(['user'], (prevData: User) => {
    //     return {
    //         ...prevData,
    //         links: JSON.stringify(updatedLinks)
    //     }
    // })
}

const links: SocialNetwork[] = JSON.parse(user.links);

const handleEnableLink = (socialName: string) => {
    const updatedEnabled = devTreeLinks.map(item => {
        if(item.name === socialName){
            if(isValidUrl(item.url)){
                return {...item, enabled : !item.enabled}
            }else{
                toast.error('URL no válida');
            }
        }
        return item
    })

    setDevTreeLinks(updatedEnabled);

    let updatedItems : SocialNetwork[] = [];

    const selectedSocialNetwork = updatedEnabled.find(link => link.name === socialName);
    if(selectedSocialNetwork?.enabled){
        const newItem: SocialNetwork = {...selectedSocialNetwork, id: links.length + 1}
        console.log(newItem);
        updatedItems = [...links, newItem];
    }else{
        console.log('Está desahibilidata');
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
            {devTreeLinks.map(item => (
                <DevTreeInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                    handleEnableLink={handleEnableLink}
                />
            ))}
            <button 
                className="bg-cyan-400 p-2 text-lg w-full text-slate-600 rounded font-bold"
                onClick={() => mutate(user)}
            >
                GUARDAR CAMBIOS
            </button>
        </div>
    )
}
