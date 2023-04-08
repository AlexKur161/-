import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Catalog from "@/pages/Catalog.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'Home',
        component: Home 
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog 
        }
    ]
})
export default router