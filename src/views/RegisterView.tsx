import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import type { RegisterForm } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../api/DevTreeApi";

export default function RegisterView() {

    const location = useLocation();
    const navigate = useNavigate();

    //Valores iniciales para el formulario de registro
    const initialValues = {
        name: '',
        email: '',
        username: location?.state?.username || '',
        password: '',
        password_confirmation: ''
    }

    // Inicializamos useForm (React Hook Form)
    const {register, watch, reset, handleSubmit, formState: { errors }} = useForm<RegisterForm>({defaultValues: initialValues});

    // Observaremos y guardaremos la constraseña 
    const password = watch('password');

    const registerMutation = useMutation({
        mutationFn: registerUser,
        onError: (error) => {
            toast.error(error.message)
        }, 
        onSuccess: (data) => {
            console.log(data);
            toast.success(data);
            reset();
            navigate('/auth/login');
        }   
    })

    // Función al hacer click en registrar
    // Esta función se pasa como callback a handleSubmit (React Hook Form)
    // Recibirá automáticamente los parámetros incluidos en "register"
    const handleRegister = async (formData: RegisterForm) => {
        registerMutation.mutate(formData)
        // try {
        //     const {data} = await api.post(`/auth/register`, formData);
        //     toast.success(data);
        //     reset();
        //     navigate('/auth/login')
        // } catch (error) {
        //     if(isAxiosError(error) && error.response){
        //         toast.error(error.response.data)
        //     }
        // }
    }

    return (
        <div className="pt-9 pb-9 px-5 max-w-lg mx-auto">
            <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>

            <form 
                onSubmit={handleSubmit(handleRegister)}
                noValidate
                className="bg-white px-5 py-5 rounded-lg space-y-6 mt-7"
            >

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500">Nombre</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Tu Nombre"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('name', {
                            required: 'El nombre es obligatorio'
                        })}
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="email" className="text-2xl text-slate-500">E-mail</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "E-mail no válido",
                            },
                        })}
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="username" className="text-2xl text-slate-500">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Nombre de usuario único: sin espacios"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('username', {
                            required: 'El nombre de usuario es obligatorio'
                        })}
                    />

                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password" className="text-2xl text-slate-500">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password', {
                            required: 'El password es obligatorio',
                            minLength: {
                                value: 8,
                                message: "El password debe ser mínimo de 8 caracteres"
                            }
                        })}
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="password_confirmation" className="text-2xl text-slate-500">Repetir Password</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            required: 'Repetir password es obligatorio',
                            validate: (value) => value === password || 'El password no coincide' 
                        })}
                    />

                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
                </div>

                <input
                    type="submit"
                    className="bg-orange hover:bg-orange-light p-3 text-lg w-full uppercase text-dark rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />  
            </form>

            <nav className="mt-6">
                <Link 
                    to='/auth/login'
                    className="text-center text-white text-lg block"
                >
                    ¿Ya tienes cuenta? <span className="text-green">Inicia sesión</span> 
                </Link>
            </nav>
        </div>
        
    )
}
