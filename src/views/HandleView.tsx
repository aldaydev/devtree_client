import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "../api/DevTreeApi";
import HandleData from "../components/HandleData";

export default function HandleView() {

  const params = useParams();
  const username = params.username!;

  const { data , error, isLoading } = useQuery({
    queryFn: () => getUserByUsername(username),
    queryKey: ['username', username],
    retry: 1
  })

  if(isLoading) return <p className="text-center text-white text-2xl">Cargando...</p>;

  if(error) return <Navigate to={'/404'}/>;

  if(data) return <HandleData data={data}/>
}
