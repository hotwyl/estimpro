import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Calculator from '../views/Calculadora.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: Sobre },
    { path: '/calculadora', component: Calculator }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router