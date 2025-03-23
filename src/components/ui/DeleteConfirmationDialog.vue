<template>
    <v-dialog 
        :model-value="modelValue"
        @update:model-value="(val) => emit('update:modelValue', val)"
        max-width="400"
    >
        <v-card>
            <v-card-title class="text-h6">{{ title }}</v-card-title>
            <v-card-text>{{ message }}</v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn color="grey" @click="$emit('cancel')">Cancel</v-btn>
                <v-btn color="red" @click="$emit('confirm')">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
const props = defineProps<{
    modelValue: boolean
    title?: string
    message?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'confirm'): void
    (e: 'cancel'): void
}>()
</script>