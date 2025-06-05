import Logo from "./Logo";
import AdminNavigation from "./nav/AdminNavigation";
import HomeNavigation from "./nav/HomeNavigation"
import { useLocation } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation();

    return (
        <header className="bg-dark px-[5%] py-5 md:px-[15%]  flex justify-between">
            
                <div className="">
                    <Logo/>
                </div>
                <nav className="flex items-center gap-6">
                    {pathname === '/' || !localStorage.AUTH_TOKEN ?
                        <HomeNavigation/>
                        :
                        <AdminNavigation/>
                    }
                </nav>
        </header>
    )
}
