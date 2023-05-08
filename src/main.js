import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Index from './pages/Index.vue'

const app = createApp(App)

const router = createRouter({
	history: createWebHistory(),
	routes: [{ path: '/', component: Index }]
})

app.use(router)

app.mount('#app')
