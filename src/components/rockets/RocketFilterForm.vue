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
  
  const store = useRocketStore()
  const filters = store.filters
  
  // You can make this dynamic by extracting from rocket list
  const countryOptions = ['All', 'United States', 'Republic of the Marshall Islands']
  </script>
  