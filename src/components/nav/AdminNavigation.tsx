import { useQueryClient } from "@tanstack/react-query";

export default function AdminNavigation() {

    const queryClient = useQueryClient();

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        queryClient.invalidateQueries({queryKey: ['user']});
    }


    return (
        <button
            className="p-[7px] bg-green text-dark uppercase md:py-2 md:px-3 font-black text-xs rounded-lg cursor-pointer hover:bg-green-light hover:transition-colors tracking-wide flex items-center gap-2 scale-90 sm:scale-100"
            onClick={logout}
        >
            <p className='hidden md:block'>Cerrar Sesión</p>
            <img src='/icons/logout_icon.svg'/>
        </button>
    )
}
