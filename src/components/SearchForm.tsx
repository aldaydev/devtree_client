import { useForm } from 'react-hook-form'
import ErrorMessage from "./ErrorMessage";
import slugify from 'react-slugify';
import { useMutation } from '@tanstack/react-query';
import { searchByUsername } from '../api/DevTreeApi';
import { Link } from 'react-router-dom';

export default function SearchForm() {

    const { register, handleSubmit, watch, formState: { errors} } = useForm({
        defaultValues: {
            username: ''
        }
    })

    const mutation = useMutation({
        mutationFn: searchByUsername
    })

    const username = watch('username');

    const handleSearch = () => {
        const slug = slugify(username);
        mutation.mutate(slug);
    }

    return (
        <form
            onSubmit={handleSubmit(handleSearch)}
            className="space-y-5 w-[100%] mx-auto">
            <div className="relative flex items-center  bg-white  px-2">
                <label
                    htmlFor="username"
                    className='font-bold'
                >devtree.com/</label>
                <input
                    type="text"
                    id="username"
                    className="border-none bg-transparent p-2 focus:ring-0 flex-1"
                    placeholder="elonmusk, zuck, jeffbezos"
                    {...register("username", {
                        required: "Un Nombre de Usuario es obligatorio",
                    })}
                />

            </div>
            {errors.username && (
                <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}

            <div className="mt-10">
                {mutation.isPending && <p className='text-center'>Cargando...</p>}
                {mutation.error && <p className='text-red-600 font-black text-center'>{mutation.error.message}</p>}
                {mutation.data && 
                    <p className='text-green-500 font-black text-center'>
                        {mutation.data} <Link className='text-cyan-500' to={'/auth/register'} state={{username: slugify(username)}}>IR A REGISTRO</Link>
                    </p>}
            </div>

            <input
                type="submit"
                className="bg-[#e9ae50] p-3 text-lg w-full uppercase text-dark rounded-lg font-bold cursor-pointer hover:bg-[#f7b956]"
                value='COMPROBAR MI ENLACE'
            />
        </form>
    )
}
