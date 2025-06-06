import Logo from "./Logo";
import AdminNavigation from "./nav/AdminNavigation";
import HomeNavigation from "./nav/HomeNavigation"
import { useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Header() {

    const {isLoggedIn} = useContext(AuthContext)!;

    const { pathname } = useLocation();
    
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
