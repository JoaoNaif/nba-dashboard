import { useQuery } from "@tanstack/react-query"
import { getPlayers } from "./api"

export const usePlayers = () =>{
    const query = useQuery({
        queryKey: ['players'],
        queryFn: getPlayers
    })
    return query
} 