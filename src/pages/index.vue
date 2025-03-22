<template>
  <v-container class="text-center my-10">
    <h1 class="main-title" :style="{ color: colors.space.title }">&#x1F680; My Rockets &#128640;</h1>
    <v-row justify="center" class="mt-5">
      <v-col cols="12" md="8">
        <ErrorState v-if="store.error" :onRetry="store.loadRockets"/>

        <LoadingState
        v-if="store.loading"
        />

        <v-row v-else>
          <v-col
            v-for="rocket in store.rockets"
            :key="rocket.id"
            cols="12"
            sm="6"
            md="4"
          >
            <RocketCard :rocket="rocket"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted} from "vue";
import { useRocketStore  } from "@/store/rocketStore";
import { colors } from '@/assets/color';

import RocketCard from "@/components/rockets/RocketCard.vue";
import LoadingState from "@/components/ui/LoadingState.vue";
import ErrorState from "@/components/ui/ErrorState.vue";

const store = useRocketStore()
onMounted(() => {
  if (!store.rockets.length) {
    store.loadRockets()
  }
})
</script>

<style scoped>
.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(144, 202, 249, 0.3);
  letter-spacing: 1px;
}
</style>