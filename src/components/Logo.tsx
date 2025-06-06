import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/'>
            <img src="/logo.svg" alt="Logotipo DevTree" className="w-full max-w-[250px] block" />
        </Link>
    )
}
