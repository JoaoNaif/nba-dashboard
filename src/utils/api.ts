import { Players } from "@/types/Players";
import axios from "axios";

const req = axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1'
})

export const getPlayers = async (name: string | null): Promise<Players[]> => {
    const results = await req.get(`/players?search=${name}`)
    return results.data.data
}

export const getPlayersID = async () => {
    const results = await req.get(``)
    return results.data
}

