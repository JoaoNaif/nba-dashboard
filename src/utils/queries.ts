import { useQuery } from "@tanstack/react-query"
import { getPlayers, getPlayersID } from "./api"

export const usePlayers = (name: string | null) =>{
    const query = useQuery({
        queryKey: ['players', name],
        queryFn: () => getPlayers(name)
    })
    return query
} 

export const usePlayersID = (id: number | null) =>{
    const query = useQuery({
        queryKey: ['players', id],
        queryFn: () => getPlayersID(id)
    })
    return query
} 