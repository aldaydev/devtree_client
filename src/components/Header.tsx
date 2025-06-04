import Logo from "./Logo";
import AdminNavigation from "./nav/AdminNavigation";
import HomeNavigation from "./nav/HomeNavigation"
import { useLocation } from "react-router-dom"

export default function Header() {

    const { pathname } = useLocation();

    return (
        <header className="bg-slate-800 py-5">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex justify-center w-full p-5 lg:p-0 md:w-1/3">
                    <Logo/>
                </div>
                <nav className="md:w-1/3 md:flex md:justify-end md:mx-7">

                    {pathname === '/' ?
                        <HomeNavigation/>
                        :
                        <AdminNavigation/>
                    }

                </nav>
            </div>
        </header>
    )
}
