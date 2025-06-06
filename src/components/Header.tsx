import { useEffect, useState } from "react";
import Logo from "./Logo";
import AdminNavigation from "./nav/AdminNavigation";
import HomeNavigation from "./nav/HomeNavigation"
import { useLocation } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(localStorage.AUTH_TOKEN){
            setIsLoggedIn(true)
        }else{
            setIsLoggedIn(false)
        }
    }, [])
    

    return (
        <header className="bg-dark py-5 res-padding flex justify-between">
            
                
                <Logo/>
                
                <nav className="flex items-center gap-6">
                    {!isLoggedIn && (pathname !== '/auth/login' || '/auth/register') ?
                        <HomeNavigation/>
                        :
                        <AdminNavigation/>
                    }
                </nav>
        </header>
    )
}
