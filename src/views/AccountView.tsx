import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import type { AccountForm } from '../types';
import { deleteAccount, updateAccount } from '../api/DevTreeApi';
import { toast } from 'sonner';
import DeleteAccountModal from '../components/DeleteAccountModal';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AccountView() {

    const { setIsLoggedIn } = useContext(AuthContext)!;

    const queryClient = useQueryClient();
    const data: AccountForm = queryClient.getQueryData(['user'])!

    const [confirmationModal, setConfirmationModal] = useState(false);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<AccountForm>({
        defaultValues: {
            name: data.name,
            password: '',
            password_confirmation: ''
        }
    });

    const password = watch('password');

    const updateAccountMutation = useMutation({
        mutationFn: updateAccount,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            toast.success(data);
            //Este método hace que se invalide el query actual y se hace de nuevo
            queryClient.invalidateQueries({ queryKey: ['user'] })
        }
    });

    const deleteAccountMutation = useMutation({
        mutationFn: deleteAccount,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: (data) => {
            localStorage.removeItem('AUTH_TOKEN');
            setIsLoggedIn(false);
            location.reload();
            toast.success(data);
        }
    })


    const handleUserAccountForm = (formData: AccountForm) => {
        const user: AccountForm = queryClient.getQueryData(['user'])!;
        user.name = formData.name;
        user.password = formData.password;
        updateAccountMutation.mutate(user);
        reset();
    };

    const handleDeleteAccount = () => {
        setConfirmationModal(true);
        // deleteAccountMutation.mutate();
    }

    return (
        <div className='relative' id='accountContainer'>
            <form
                className="bg-white p-5 rounded-lg space-y-5"
                onSubmit={handleSubmit(handleUserAccountForm)}
            >
                <legend className="text-2xl text-slate-800 text-center">Editar tu cuenta</legend>
                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="name"
                    >Nombre:</label>
                    <input
                        type="text"
                        className="border-none bg-slate-100 rounded-lg p-2"
                        placeholder="Nombre de Usuario único"
                        {...register('name', {
                            required: 'El nombre de usuario es obligatorio'
                        })}
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="password"
                    >Cambiar Contraseña:</label>
                    <input
                        type='password'
                        className="border-none bg-slate-100 rounded-lg p-2"
                        placeholder="Nueva contraseña"
                        {...register('password', {
                            maxLength: {
                                value: 8,
                                message: 'El password debe ser mínimo de 8 caracteres'
                            }
                        })}
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <label
                        htmlFor="password"
                    >Confirmar Contraseña:</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        placeholder="Repetir Password"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('password_confirmation', {
                            validate: (value) => value === password || 'El password no coincide'
                        })}
                    />

                    {errors.password_confirmation && <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>}
                </div>

                <input
                    type="submit"
                    className="bg-orange p-2 hover:bg-orange-light text-lg w-full uppercase text-dark rounded-lg font-bold cursor-pointer"
                    value='Guardar Cambios'
                />

            </form>
            <div className='w-full flex justify-center'>
                <button
                    className="bg-red-600 p-2 hover:bg-red-500 text-lg uppercase text-dark rounded-lg font-bold cursor-pointer w-full my-5"
                    onClick={handleDeleteAccount}
                >
                    Eliminar Cuenta
                </button>
            </div>


            {confirmationModal && <DeleteAccountModal setConfirmationModal={setConfirmationModal} deleteAccountMutation={deleteAccountMutation} />}
        </div>
    )
}
