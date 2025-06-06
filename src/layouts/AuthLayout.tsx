import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';


export default function AuthLayout() {
    return (
        <>
            <div className="bg-dark min-h-[calc(100dvh-85px)]">
                <div className='max-w-lg mx-auto py-10 px-5'>
                    <Outlet/>
                </div>
            </div>

            <Toaster position='top-right'/>
        </>
    )
}
