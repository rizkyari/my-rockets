import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'
import type { Rocket } from '@/types/rocket'
import { fetchRockets, fetchRocketById, queryRocketsByName, queryRocketsAdvanced } from '@/services/rocketService'

export const useRocketStore = defineStore('rockets', () => {
    const rockets = ref<Rocket[]>([])
    const selectedRocket = ref<Rocket | null>(null)
    const loading = ref(false)
    const error = ref(false)
    const searchTerm = ref('')
    const filteredRockets = ref<Rocket[]>([])
    // const filters = ref<{
    //     searchTerm: string
    //     status: 'All' | 'Active' | 'Inactive'
    //     country: string
    // }>({
    //     searchTerm: '',
    //     status: 'All',
    //     country: 'All',
    // })
    const filters = reactive({
        searchTerm: '',
        status: 'All' as 'All' | 'Active' | 'Inactive',
        country: 'All',
      })

    const loadRockets = async () => {
        try {
            loading.value = true
            error.value = false
            rockets.value = await fetchRockets()
            filteredRockets.value = rockets.value
        } catch(e) {
            error.value = true
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    const searchRockets = async () => {
        const term = searchTerm.value.trim()
        if (!term) {
            filteredRockets.value = rockets.value
            return
        }

        try {
            loading.value = true
            error.value = false
            filteredRockets.value = await queryRocketsByName(searchTerm.value)
        } catch (e) {
            error.value = true
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

    const applyFilters = async () => {
        try {
          loading.value = true
          error.value = false
          filteredRockets.value = await queryRocketsAdvanced(filters)
        } catch (e) {
          error.value = true
          console.error(e)
        } finally {
          loading.value = false
        }
    }

    const clearFilters = async () => {
        filters.searchTerm = ''
        filters.status = 'All'
        filters.country = 'All'
      
        try {
          loading.value = true
          error.value = false
          filteredRockets.value = await queryRocketsAdvanced({})
        } catch (e) {
          error.value = true
          console.error(e)
        } finally {
          loading.value = false
        }
    }

    const hasActiveFilters = computed(() => {
        return (
          filters.searchTerm.trim() !== '' ||
          filters.status !== 'All' ||
          filters.country !== 'All'
        )
    })

    return {
        rockets,
        loading,
        error,
        selectedRocket,
        filteredRockets,
        searchTerm,
        filters,
        hasActiveFilters,
        clearFilters,
        loadRockets,
        getRocketById,
        searchRockets,
        applyFilters,
    }
})