<template>
    <v-form ref="formRef" @submit.prevent="submit">
        <v-text-field v-model="form.name" label="Rocket Name" :rules="[required]" />
        <v-textarea v-model="form.description" label="Description" rows="3" :rules="[required]" />
        <v-text-field v-model="form.country" label="Country" :rules="[required]" />
        <v-text-field v-model="form.cost_per_launch" label="Cost per Launch ($)" type="number" :rules="[required, isNumber]" />
        <v-text-field v-model="form.first_flight" label="First Flight Date" type="date" :rules="[required, isDate]" />
        <v-text-field v-model="form.flickr_images[0]" label="Rocket Image URL" :rules="[required,isUrl]" />
  
        <v-btn type="submit" color="primary" class="mt-4">
            Save Rocket
        </v-btn>
    </v-form>
</template>
  
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Rocket } from '@/types/rocket'
import { required, isNumber, isDate, isUrl } from '@/utils/rocketValidation'
  
const emit = defineEmits<{
    (e: 'submit', data: Omit<Rocket, 'id'>): void
}>()
  
const formRef = ref<any>(null)

const props = defineProps<{
  initialData?: Omit<Rocket, 'id'>
}>()

const form = reactive<Omit<Rocket, 'id'>>({
    name: props.initialData?.name ?? '',
    description: props.initialData?.description ?? '',
    country: props.initialData?.country ?? '',
    cost_per_launch: props.initialData?.cost_per_launch ?? 0,
    first_flight: props.initialData?.first_flight ?? '',
    flickr_images: props.initialData?.flickr_images ?? [''],
    active: props.initialData?.active ?? true,
})

const submit = async () => {
    if (!formRef.value) return

    const { valid } = await formRef.value.validate()
    if (!valid) return

    emit('submit', form)
}
</script>
  