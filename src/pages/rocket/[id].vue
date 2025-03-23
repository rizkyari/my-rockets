<template>
    <v-container>
        <LoadingState v-if="store.loading"/>
        <v-alert v-else-if="!store.selectedRocket" type="error">
            Rocket not found
        </v-alert>
        <div v-else>
            <v-btn
                prepend-icon="mdi-arrow-left"
                color="primary"
                variant="text"
                class="mb-4"
                @click="$router.push('/')"
            >
                Back to Home
            </v-btn>
            <RocketDetailCard :rocket="store.selectedRocket"/>
        </div>
    </v-container>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useRocketStore } from '@/store/rocketStore';

import RocketDetailCard from '@/components/rockets/RocketDetail.vue'
import LoadingState from '@/components/ui/LoadingState.vue';

const route = useRoute()
const store = useRocketStore()

onMounted(() => {
    store.getRocketById(route.params.id as string)
})
</script>

<style></style>