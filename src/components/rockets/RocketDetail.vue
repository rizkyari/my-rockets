<template>
    <v-card class="pa-4" :style="{backgroundColor: colors.space.card}">
        
        <div>
            <v-btn
                v-if="isCustomRocket"
                color="primary"
                class="my-4 me-4"
                @click="editDialog = true"
            >
                Edit Rocket
            </v-btn>
            <v-btn
                v-if="isCustomRocket"
                color="error"
                class="my-4"
                @click="confirmDialog = true"
            >
                Delete Rocket
            </v-btn>
        </div>
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
    <DeleteConfirmationDialog
        v-model="confirmDialog"
        title="Confirm Deletion"
        message="Are you sure you want to delete this rocket?"
        @confirm="deleteThisRocket"
        @cancel="confirmDialog = false"
    />
    <EditRocketModal
        v-if="store.selectedRocket"
        v-model="editDialog"
        :initialData="store.selectedRocket"
        @save="handleEditRocket"
    />
    <v-snackbar
        v-model="showSnackbar"
        timeout="3000"
        color="success"
        location="top right"
    >
        Rocket updated successfully!
    </v-snackbar>
</template>

<script lang="ts" setup>
import {ref,computed} from 'vue'
import { useRouter } from 'vue-router';
import { useRocketStore } from '@/store/rocketStore';
import type { Rocket } from '@/types/rocket'
import { colors } from '@/assets/color'

import DeleteConfirmationDialog from '../ui/DeleteConfirmationDialog.vue';
import EditRocketModal from './EditRocketModal.vue';

defineProps<{ rocket: Rocket}>()
const store = useRocketStore()
const router = useRouter()

const confirmDialog = ref(false)
const editDialog = ref(false)
const showSnackbar = ref(false)

const isCustomRocket = computed(() =>
    store.customRockets.some(r=> r.id === store.selectedRocket?.id)
)

const deleteThisRocket = () => {
    if(!store.selectedRocket) return
    store.deleteRocket(store.selectedRocket.id)
    confirmDialog.value = false
    router.push('/')
}

const handleEditRocket = (updated: Rocket) => {
  store.updateRocket(updated)
  showSnackbar.value = true
}
</script>