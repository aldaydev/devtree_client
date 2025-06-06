import { useEffect, useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"

type AuthProviderProps = {
    children: ReactNode
}

export default function AuthProvider({ children } : AuthProviderProps) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.AUTH_TOKEN){
            setIsLoggedIn(true);
        }else{
            setIsLoggedIn(false);
        }
    }, [])

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
