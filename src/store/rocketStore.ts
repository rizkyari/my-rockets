import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Rocket } from '@/types/rocket'
import { fetchRockets, fetchRocketById } from '@/services/rocketService'

export const useRocketStore = defineStore('rockets', () => {
    const rockets = ref<Rocket[]>([])
    const selectedRocket = ref<Rocket | null>(null)
    const loading = ref(false)
    const error = ref(false)

    const loadRockets = async () => {
        try {
            loading.value = true
            error.value = false
            rockets.value = await fetchRockets()
        } catch(e) {
            error.value = true
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    const getRocketById = async (id:string) => {
        loading.value = true
        error.value = false
        try {
            selectedRocket.value = await fetchRocketById(id)
        } catch(e) {
            error.value = true
            console.error(e)
            selectedRocket.value = null
        } finally {
            loading.value = false
        }
    }

    return {
        rockets,
        loading,
        error,
        selectedRocket,
        loadRockets,
        getRocketById
    }
})