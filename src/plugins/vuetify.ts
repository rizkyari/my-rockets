/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { colors } from '@/assets/color'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: colors.space.background,
          surface: colors.space.surface,
          primary: colors.space.primary,
          secondary: colors.space.secondary,
          card: colors.space.card,
        },
      },
      light: {
        dark: false,
        colors: {
          background: colors.light.background,
          surface: colors.light.surface,
          primary: colors.light.primary,
          secondary: colors.light.secondary,
          card: colors.light.card,
        },
      },
    },
  },
})
