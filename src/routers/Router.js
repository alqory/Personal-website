import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../page/Home.vue'

const Routes = [
    {
        path : "/",
        name : "Home",
        component : HomeVue
    }
]
export const Router = createRouter({
    history : createWebHistory(),
    routes  : Routes
})

Router.beforeEach((to, from, next) => {
    if(to.path !== "/") {
        next({ name : "Home" })
    }else {
        next()
    }
})

