import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/' className="flex align-middle scale-75 sm:scale-100 ">
            <img src="/mlink_logo_green.svg" alt="Logotipo DevTree" className="w-full max-w-[100px] block" />
            <p className="text-white font-bold text-3xl mt-1 ml-2">MLINK</p>
        </Link>
    )
}
