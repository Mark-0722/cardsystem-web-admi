import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Points from '../views/Points.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/points', component: Points }
    ]
})

export default router