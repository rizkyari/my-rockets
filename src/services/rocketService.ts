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

export async function queryRocketsByName(name: string): Promise<Rocket[]> {
    const res = await axios.post(`${API_URL}/rockets/query`, {
      query: {
        name: { $regex: name, $options: 'i' }
      },
      options: {
        sort: { name: 1 }
      }
    })
    return res.data.docs
}

export async function queryRocketsAdvanced(filters: {
    searchTerm?: string
    status?: 'All' | 'Active' | 'Inactive'
    country?: string
  }): Promise<Rocket[]> {
    const query: any = {}
  
    if (filters.searchTerm?.trim()) {
      query.name = {
        $regex: filters.searchTerm.trim(),
        $options: 'i'
      }
    }
  
    if (filters.status && filters.status !== 'All') {
      query.active = filters.status === 'Active'
    }
  
    if (filters.country && filters.country !== 'All') {
      query.country = filters.country
    }
  
    const res = await axios.post(`${API_URL}/rockets/query`, {
      query,
      options: {
        sort: { name: 1 }
      }
    })
  
    return res.data.docs
}
  