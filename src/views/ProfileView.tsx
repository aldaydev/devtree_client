import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import type { ProfileForm, User } from '../types';
import { updateProfile, uploadImage } from '../api/DevTreeApi';
import { toast } from 'sonner';
import { useState } from 'react';

export default function ProfileView() {

    const queryClient = useQueryClient();
    const data : User = queryClient.getQueryData(['user'])!

    const [imageError, setImageError] = useState('');

    const { register, handleSubmit, formState: {errors} } = useForm<ProfileForm>({defaultValues: {
        username: data.username,
        description: data.description
    }});

    const updateProfileMutation = useMutation({
        mutationFn: updateProfile,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
            //Este método hace que se invalide el query actual y se hace de nuevo
            queryClient.invalidateQueries({queryKey: ['user']});
            queryClient.refetchQueries({ queryKey: ['user'] });
            
        }
    });

    const uploadImageMutation = useMutation({
        mutationFn: uploadImage,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (image) => {
            console.log(image);
            // Optimistic result
            queryClient.setQueryData(['user'], (prevData: User) => {
                return {
                    ...prevData, 
                    image: image
                }
            });
        }
    });

    const handleChangeImage = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        const file = e.target.files?.[0];

        if(!file){
            return;
        }

        if(file.size > 5000){
            setImageError("Tamaño de imágen máximo 500kb");
        }

        console.log(file.size);

        const reader = new FileReader();

        reader.onload = (event) => {

            const image = new Image();
            
            image.onload = () => {
                const { width, height } = image;

                if (width !== height) {
                    setImageError("La imagen debe ser cuadrada (1x1)");
                    return;
                }

                if (width > 250 || height > 250) {
                    setImageError("La imagen no puede superar 250x250 píxeles");
                    return;
                }

                uploadImageMutation.mutate(file);
                setImageError('');
            }

            image.src = event.target?.result as string;
        }

        reader.readAsDataURL(file);
    }

    const handleUserProfileForm = (formData : ProfileForm) => {

        const user: User = queryClient.getQueryData(['user'])!;
        user.description = formData.description;
        user.username = formData.username;
        updateProfileMutation.mutate(user);

    };

    return (
        <form 
            className="bg-white p-5 rounded-lg space-y-5"
            onSubmit={handleSubmit(handleUserProfileForm)}
        >
            <legend className="text-2xl text-slate-800 text-center">Editar Información</legend>
            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="username"
                >Username:</label>
                <input
                    type="text"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder="Nombre de Usuario único"
                    {...register('username', {
                        required: 'El nombre de usuario es obligatorio'
                    })}
                />

                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="description"
                >Descripción:</label>
                <textarea
                    className="border-none bg-slate-100 rounded-lg p-2"
                    placeholder="Tu Descripción"
                    {...register('description', {
                        maxLength: {
                            value: 150,
                            message: 'La descripción no puede superar los 150 caracteres'
                        }
                    })}
                />

                {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
            </div>

            <div className="grid grid-cols-1 gap-2">
                <label
                    htmlFor="image"
                >Imagen:</label>
                <input
                    id="image"
                    type="file"
                    name="image"
                    className="border-none bg-slate-100 rounded-lg p-2"
                    accept="image/*"
                    onChange={(e) => handleChangeImage(e)}
                />
                {imageError && <ErrorMessage>{imageError}</ErrorMessage>}
            </div>

            <input
                type="submit"
                className="bg-orange hover:bg-orange-light p-2 text-lg w-full uppercase text-dark rounded-lg font-bold cursor-pointer"
                value='Guardar Cambios'
            />
        </form>
    )
}
