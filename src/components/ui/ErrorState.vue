<template>
    <v-alert type="error" class="mb-4">
        Failed to fetch rocket lists.
        <v-btn @click="onRetry" text>Retry</v-btn>
    </v-alert>
</template>

<script lang="ts" setup>
defineProps<{
    onRetry: () => void
}>()
</script>