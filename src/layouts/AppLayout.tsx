import { useQuery } from '@tanstack/react-query';
import { Navigate } from "react-router-dom";
import { getUser } from "../api/DevTreeApi";
import DevTree from "../components/DevTree";
import Spinner from '../components/Spinner';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function AppLayout() {

    const {setIsLoggedIn} = useContext(AuthContext)!;

    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'],
        retry: 2,
        refetchOnWindowFocus: false
    });

    if(isLoading) return <Spinner/>;
    if(isError) {
        localStorage.removeItem('AUTH_TOKEN');
        setIsLoggedIn(false);
        return <Navigate to={'/auth/login'}/>
    }
    if (data) return <DevTree data={data}/>
}