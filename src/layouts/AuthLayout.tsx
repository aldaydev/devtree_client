import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';


export default function AuthLayout() {
    return (
        <>
            <div className="bg-dark min-h-[calc(100dvh-85px)]">
                    <Outlet/>
            </div>

            <Toaster position='top-right'/>
        </>
    )
}
