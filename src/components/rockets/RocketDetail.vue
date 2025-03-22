<template>
    <v-card class="pa-4" :style="{backgroundColor: colors.space.card}">
        <v-img :src="rocket.flickr_images[0]" height="300px" cover class="mb-4"/>
        <h2 class="text-h4 mb-2" :style="{color: colors.space.title}">
            {{ rocket.name }}
        </h2>
        <p class="mb-4" style="color: white;">{{ rocket.description }}</p>
        <v-divider class="my-4"/>
        <p style="color: white">
            <strong>Country :</strong>
            {{ rocket.country }}
        </p>
        <p style="color: white">
            <strong>Cost per Launch: :</strong>
            {{ rocket.cost_per_launch }}
        </p>
        <p style="color: white">
            <strong>First Flight: :</strong>
            {{ rocket.first_flight }}
        </p>
    </v-card>
</template>

<script lang="ts" setup>
import type { Rocket } from '@/types/rocket'
import { colors } from '@/assets/color'

defineProps<{ rocket: Rocket}>()
</script>