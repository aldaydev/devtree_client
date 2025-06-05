import { Link } from 'react-router-dom'

export default function HomeNavigation() {
    return (
        <>
            <Link
                to='/auth/login'
                className='text-white uppercase font-black text-xs cursor-pointer hover:text-[#60e995] tracking-wide '
            >
                <p className='hidden md:block'>Iniciar Sesión</p>
                <img 
                    src='/icons/login_icon.svg'
                    className='block md:hidden'
                />
            </Link>

            <Link
                to='/auth/register'
                className='p-[7px] bg-green text-dark uppercase md:py-2 md:px-3 font-black text-xs rounded-lg cursor-pointer hover:bg-green-light hover:transition-colors tracking-wide flex items-center gap-2'
            >
                <p className='hidden md:block'>Crear cuenta</p>
                <img src='/icons/register_icon.svg'/>
            </Link>
        
        </>
    )
}
