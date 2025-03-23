<template>
  <router-link :to="`/rocket/${rocket.id}`" style="text-decoration: none;">
    <v-card 
    class="rocket-card d-flex flex-column h-100"
    :style="{ backgroundColor: cardColor }"
    hover
    >
      <v-img :src="rocket.flickr_images[0] || fallbackImage" height="200px" cover />

      <v-card-title class="text-wrap" :style="{ color: titleColor }">
        {{ rocket.name }}
      </v-card-title>

      <v-card-text class="rocket-desc">
        {{ rocket.description }}
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn
          color="primary"
          variant="text"
          @click="$router.push(`/rocket/${rocket.id}`)"
        >
          Show More
        </v-btn>
      </v-card-actions>

      <div class="card-footer-spacer" />
    </v-card>
  </router-link>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { computed } from 'vue'
import type { Rocket } from '@/types/rocket';
import { colors } from '@/assets/color';
import { fallbackImage } from '@/assets/constants'

defineProps<{ rocket: Rocket }>()
const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

const cardColor = computed(() =>
  isDark.value ? colors.space.card : colors.light.card
)

const titleColor = computed(() =>
  isDark.value ? colors.space.title : colors.light.title
)
</script>

<style scoped>
.rocket-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: normal;
  min-height: 5.6em;
  line-height: 1.4em;
  margin-bottom: 0;
  padding-bottom: 0;
}

.card-footer-spacer {
  height: 16px;
}

.rocket-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.rocket-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 20px rgba(144, 202, 249, 0.3);
}
</style>
