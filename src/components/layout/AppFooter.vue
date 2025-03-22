<template>
    <v-footer app class="bg-grey-darken-4 text-grey-lighten-2 pa-4">
        <v-container class="text-center">
            <p>&copy; {{ year }} My Rockets</p>
            <p class="text-caption">Built using Vue + Vite</p>
        </v-container>
    </v-footer>
</template>

<script lang="ts" setup>
const year = new Date().getFullYear()
</script>