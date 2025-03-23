<template>
    <v-dialog 
    :model-value="modelValue"
    @update:model-value="val => emit('update:modelValue', val)"
    max-width="600"
    >
        <v-card>
            <v-card-title>Edit Rocket</v-card-title>
            <v-card-text>
                <RocketForm :initial-data="initialData" @submit="handleSubmit" />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
  
<script setup lang="ts">
import RocketForm from '@/components/rockets/RocketForm.vue'
import type { Rocket } from '@/types/rocket'
  
const props = defineProps<{
    modelValue: boolean
    initialData: Rocket
}>()
  
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'save', updated: Rocket): void
}>()
  
const handleSubmit = (data: Omit<Rocket, 'id'>) => {
    emit('save', {
      ...data,
      id: props.initialData.id
    })
    emit('update:modelValue', false)
}
</script>
  