import { useForm } from 'react-hook-form'
import ErrorMessage from "./ErrorMessage";
import slugify from 'react-slugify';
import { useMutation } from '@tanstack/react-query';
import { searchByHanlde } from '../api/DevTreeApi';
import { Link } from 'react-router-dom';

export default function SearchForm() {

    const { register, handleSubmit, watch, formState: { errors} } = useForm({
        defaultValues: {
            handle: ''
        }
    })

    const mutation = useMutation({
        mutationFn: searchByHanlde
    })

    const handle = watch('handle');

    const handleSearch = () => {
        const slug = slugify(handle);
        mutation.mutate(slug);
        console.log(mutation.error?.message);
        console.log(mutation.data);
    }

    return (
        <form
            onSubmit={handleSubmit(handleSearch)}
            className="space-y-5">
            <div className="relative flex items-center  bg-white  px-2">
                <label
                    htmlFor="handle"
                >devtree.com/</label>
                <input
                    type="text"
                    id="handle"
                    className="border-none bg-transparent p-2 focus:ring-0 flex-1"
                    placeholder="elonmusk, zuck, jeffbezos"
                    {...register("handle", {
                        required: "Un Nombre de Usuario es obligatorio",
                    })}
                />

            </div>
            {errors.handle && (
                <ErrorMessage>{errors.handle.message}</ErrorMessage>
            )}

            <div className="mt-10">
                {mutation.isPending && <p className='text-center'>Cargando...</p>}
                {mutation.error && <p className='text-red-600 font-black text-center'>{mutation.error.message}</p>}
                {mutation.data && 
                    <p className='text-green-500 font-black text-center'>
                        {mutation.data} <Link className='text-cyan-500' to={'/auth/register'} state={{handle: slugify(handle)}}>IR A REGISTRO</Link>
                    </p>}
            </div>

            <input
                type="submit"
                className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                value='Obtener mi DevTree'
            />
        </form>
    )
}
