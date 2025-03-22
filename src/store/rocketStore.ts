import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Rocket } from '@/types/rocket'
import { fetchRockets } from '@/services/rocketService'

export const useRocketStore = defineStore('rockets', () => {
    const rockets = ref<Rocket[]>([])
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

    return {
        rockets,
        loading,
        error,
        loadRockets,
    }
})