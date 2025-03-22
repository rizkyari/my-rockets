import axios from "axios";
import type { Rocket } from "@/types/rocket";

const API_URL = import.meta.env.VITE_API_URL

export async function fetchRockets(): Promise<Rocket[]> {
    const response = await axios.get(`${API_URL}/rockets`)
    return response.data
}

export async function fetchRocketById(id: string): Promise<Rocket> {
    const res = await axios.get(`${API_URL}/rockets/${id}`)
    return res.data
}