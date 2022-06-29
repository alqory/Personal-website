import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { Router } from './routers/Router.js'
import { MotionPlugin } from '@vueuse/motion'

createApp(App)
    .use(MotionPlugin)
    .use(Router)
    .mount('#app')
