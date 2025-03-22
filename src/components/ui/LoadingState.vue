<template>
    <div>
        <v-progress-circular
        indeterminate
        color="deep-orange-lighten-2"
        model-value="80"
        :size="100" 
        :width="10"
        class="mx-auto d-block my-5"
        />
        <v-card-title style="text-align: center;">Please Wait...</v-card-title>
    </div>
</template>

<script lang="ts" setup></script>
<style></style>