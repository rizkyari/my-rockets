<template>
    <v-container>
      <h1 class="text-h4 text-center mb-6">🚀 Create New Rocket</h1>
      <RocketForm @submit="handleSubmit" />
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { useRocketStore } from '@/store/rocketStore'
  import type { Rocket } from '@/types/rocket'

  import RocketForm from '@/components/rockets/RocketForm.vue'
  
  const router = useRouter()
  const store = useRocketStore()
  
  const handleSubmit = (data: Omit<Rocket, 'id'>) => {
    store.addRocket(data)
    router.push('/')
  }
  </script>
  