import { Players } from "@/types/Players";
import axios from "axios";

const req = axios.create({
    baseURL: 'https://www.balldontlie.io/api/v1'
})

export const getPlayers = async (): Promise<Players[]> => {
    const results = await req.get('/players')
    return results.data.data
}