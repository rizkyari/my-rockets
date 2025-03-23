<template>
    <v-row class="mb-4" dense>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="filters.searchTerm"
          label="Search by Name"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
        />
      </v-col>
      <v-col cols="6" md="4">
        <v-select
          v-model="filters.status"
          :items="['All', 'Active', 'Inactive']"
          label="Status"
          variant="outlined"
          hide-details
        />
      </v-col>
      <v-col cols="6" md="4">
        <v-select
          v-model="filters.country"
          :items="countryOptions"
          label="Country"
          variant="outlined"
          hide-details
        />
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" @click="store.applyFilters">
          Search
        </v-btn>
        <v-btn
          v-if="store.hasActiveFilters"
          color="secondary"
          class="ml-2"
          @click="store.clearFilters"
        >
          Clear Filters
        </v-btn>
      </v-col>
    </v-row>
</template>
  
<script setup lang="ts">
import { useRocketStore } from '@/store/rocketStore'
import { computed } from 'vue'

const store = useRocketStore()
const filters = store.filters
  
const countryOptions = computed(() => {
  const countries = new Set<string>()
  store.filteredRockets.forEach((rocket) => {
    if (rocket.country) countries.add(rocket.country)
  })
  return ['All', ...Array.from(countries)]
})
</script>
  