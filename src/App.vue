<template>
  <v-app>
    <AppHeader/>
    <v-main>
      <router-view />
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>
