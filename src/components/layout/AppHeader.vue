<template>
    <v-app-bar color="primary" dark app flat>
        <v-container class="d-flex align-center justify-space-between">
            <router-link to="/" class="app-title">
                &#128640; My Rockets
            </router-link>

            <div class="d-none d-sm-flex gap-4">
                <v-btn to="/" text>
                    Home
                </v-btn>
                <v-btn to="/rocket/create" text>
                    + Create
                </v-btn>
            </div>

            <v-app-bar-nav-icon class="d-sm-none" @click="drawer = !drawer"/>
        </v-container>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        temporary
        right
        class="d-sm-none"
    >
        <v-list>
            <v-list-item to="/" @click="drawer = false">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/rocket/create" @click="drawer = false">
                <v-list-item-title>+ Create</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const drawer = ref(false)
</script>

<style scoped>
.app-title {
    font-weight: bold;
    font-size: 1.4rem;
    color: white;
    text-decoration: none;
}
</style>