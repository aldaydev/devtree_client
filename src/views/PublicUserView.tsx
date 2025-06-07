import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { getUserByUsername } from "../api/DevTreeApi";
import PublicUserData from "../components/PublicUserData";
import Spinner from "../components/Spinner";

export default function PublicUserView() {

  const params = useParams();
  const username = params.username!;

  const { data , error, isLoading } = useQuery({
    queryFn: () => getUserByUsername(username),
    queryKey: ['username', username],
    retry: 1
  })

  if(isLoading) return <Spinner/>;

  if(error) return <Navigate to={'/404'}/>;

  if(data) return <PublicUserData data={data}/>
}
