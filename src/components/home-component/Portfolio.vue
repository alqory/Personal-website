<script setup>
    import { ref, Transition } from 'vue'
    import Tricky from '../../assets/tricky.png'
    import VegeApp from '../../assets/vegeapp.png'
    import Cuaca from '../../assets/cuaca.png'
    import Pos from '../../assets/pos.png'
    import PortfolioCardVue from './PortfolioCard.vue'
    import { useMotion } from '@vueuse/motion'

    const projectAnimate = ref(null)
    useMotion(projectAnimate, {
        initial : {
            y : 200,
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1,
            transition : {
             delay : 100   
            }
        }
    })
</script>

<template>
    <section class="w-full lg:w-[65%] mx-auto py-28 relative overflow-hidden" id="portfolio">
    <h1 class="text-yellow mb-6 ml-8 md:ml-[7.5rem] lg:ml-8 text-base md:text-2xl w-max border-b-2 border-gray-500">Porfolio</h1>
       <section ref="projectAnimate" class="flex flex-wrap justify-center gap-4">
         <PortfolioCardVue 
            :avatar="Tricky" 
            stack="React TS, Tailwind CSS, Express TS, Postgresql"
            siteUrl="https://tricky.netlify.app"
            frontEnd="https://github.com/alqory/tricky-blog"
            backEnd="https://github.com/alqory/blog-backend"
          />
            <PortfolioCardVue 
            :avatar="VegeApp" 
            stack="VueJS, Tailwind CSS, Json (fake database)"
            siteUrl="https://vegefriend.netlify.app"
            frontEnd="https://github.com/alqory/vegetable-store"
            backEnd=""
                />
            <PortfolioCardVue 
            :avatar="Pos" 
            stack="React TS, Tailwind CSS, Express TS, Postgresql"
            siteUrl="https://qorypos.netlify.app"
            frontEnd="https://github.com/alqory/point-of-sale"
            backEnd="https://github.com/alqory/point-of-sale-API"
                />
            <PortfolioCardVue 
            :avatar="Cuaca" 
            stack="Vanilla Javascript, Tailwind CSS"
            siteUrl="https://cuaca.netlify.app"
            frontEnd="https://github.com/alqory/weather-app"
            backEnd=""
                />
       </section>
    </section>
</template>
