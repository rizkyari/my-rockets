import {createPinia} from 'pinia'
import type {App} from 'vue'

export function registerPinia(app: App) {
    const pinia = createPinia()
    app.use(pinia)
}