import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'
import type { Rocket } from '@/types/rocket'
import { v4 as uuidv4 } from 'uuid'
import { fetchRockets, fetchRocketById, queryRocketsByName, queryRocketsAdvanced } from '@/services/rocketService'

export const useRocketStore = defineStore('rockets', () => {
    const rockets = ref<Rocket[]>([])
    const selectedRocket = ref<Rocket | null>(null)
    const loading = ref(false)
    const error = ref(false)
    const searchTerm = ref('')
    const filteredRockets = ref<Rocket[]>([])
    const customRockets = ref<Rocket[]>([])
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
            filteredRockets.value = [...customRockets.value, ...rockets.value]
            return
        }

        try {
            loading.value = true
            error.value = false
            const apiResults = await queryRocketsByName(searchTerm.value)

            filteredRockets.value = [
                ...customRockets.value.filter((rocket) =>
                rocket.name.toLowerCase().includes(term.toLowerCase())
            ),
            ...apiResults
      ]    
        } catch (e) {
            error.value = true
        } finally {
            loading.value = false
        }
    }

    const getRocketById = async (id: string) => {
        loading.value = true
        error.value = false
        try {
          const local = customRockets.value.find((r) => r.id === id)
          if (local) {
            selectedRocket.value = local
            return
          }
    
          selectedRocket.value = await fetchRocketById(id)
        } catch (e) {
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
    
          const apiResults = await queryRocketsAdvanced(filters)
    
          const matchesCustom = (rocket: Rocket) => {
            const matchName =
              !filters.searchTerm.trim() ||
              rocket.name.toLowerCase().includes(filters.searchTerm.trim().toLowerCase())
            const matchStatus =
              filters.status === 'All' ||
              (filters.status === 'Active' && rocket.active) ||
              (filters.status === 'Inactive' && !rocket.active)
            const matchCountry =
              filters.country === 'All' || rocket.country === filters.country
    
            return matchName && matchStatus && matchCountry
          }
    
          const filteredCustoms = customRockets.value.filter(matchesCustom)
    
          filteredRockets.value = [...filteredCustoms, ...apiResults]
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
          filteredRockets.value = [...customRockets.value, ...(await queryRocketsAdvanced({}))]
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

    const addRocket = (data: Omit<Rocket, 'id'>) => {
        const newRocket: Rocket = {
          ...data,
          id: uuidv4(),
        }
        customRockets.value.push(newRocket)
        filteredRockets.value = [
            newRocket,
            ...filteredRockets.value.filter((r) => r.id !== newRocket.id)
        ]
    }

    const deleteRocket = (id: string) => {
        customRockets.value = customRockets.value.filter(r => r.id !== id)
        filteredRockets.value = filteredRockets.value.filter(r => r.id !== id)
        if(selectedRocket.value?.id === id) {
            selectedRocket.value = null
        }
    }

    const updateRocket = (updated: Rocket) => {
        const index = customRockets.value.findIndex(r => r.id === updated.id)
        if (index !== -1) {
          customRockets.value[index] = { ...updated }
      
          const filteredIndex = filteredRockets.value.findIndex(r => r.id === updated.id)
          if (filteredIndex !== -1) {
            filteredRockets.value[filteredIndex] = { ...updated }
          }

          if (selectedRocket.value?.id === updated.id) {
            selectedRocket.value = { ...updated }
          }
        }
    }

    return {
        rockets,
        loading,
        error,
        selectedRocket,
        filteredRockets,
        searchTerm,
        filters,
        hasActiveFilters,
        customRockets,
        clearFilters,
        loadRockets,
        getRocketById,
        searchRockets,
        applyFilters,
        addRocket,
        deleteRocket,
        updateRocket,
    }
})