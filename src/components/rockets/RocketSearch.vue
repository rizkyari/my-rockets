<template>
    <v-text-field
        v-model="searchTerm"
        label="Search Rockets"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        class="mb-4"
        hide-details
        @keydown.enter="store.searchRockets"
    />
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useRocketStore } from '@/store/rocketStore';

const store = useRocketStore()
const { searchTerm } = storeToRefs(store)
</script>