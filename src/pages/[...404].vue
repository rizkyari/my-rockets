<template>
    <v-container class="text-center py-10">
        <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/Tiangong_Space_Station_Rendering_2021.10_no_background.png"
        max-width="500"
        class="mx-auto mb-6"
        />
        <h1 class="text-h3 mb-2" style="color: #fff">404 - Rocket Lost in Space</h1>
        <p class="text-subtitle-1 mb-6" style="color: #ccc">
            The page you're looking for drifted into a black hole.
        </p>
        <v-btn color="primary" @click="$router.push('/')">
            Bring Me Back to Earth
        </v-btn>
    </v-container>
</template>
  
<script setup lang="ts">
</script>
  