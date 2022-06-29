<script setup>
    import { onMounted, ref } from 'vue';
    import { useMotion } from '@vueuse/motion';
    import react from '../../assets/reactjs.png'
    import vue from '../../assets/vue.png'
    import express from '../../assets/express.png'
    import tailwind from '../../assets/tailwind.png'
    import psql from '../../assets/psql.png'
    import figma from '../../assets/figma.png'
    import AboutCardToolsVue from './AboutCardTools.vue';

    const aboutAnimate = ref(null)
    const toolsAnimate = ref(null)

    useMotion(toolsAnimate, {
        initial : {
            y : 100,
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1,
            transition : {
                delay : 600
            }
        }
    })

    useMotion(aboutAnimate, {
        initial : {
            y : 100,
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1,
            transition : {
                delay : 400
            }
        }
    })

    onMounted(()=> {
      window.addEventListener("scroll",scrollDisplayCounter)
    })

    const scrollDisplayCounter = () => {
        if(window.scrollY > 333) {
            counting()
        }
    }

    const counting = () => {
        document.querySelectorAll("#counter")
        .forEach((item) => {
            
             const startCount = () => {
                const dataItem = item.getAttribute("data-counter")
                const indicator = +item.textContent
                let increment = +dataItem / +dataItem

                if(indicator < +dataItem) {
                    item.textContent = `${indicator + increment}`
                    setTimeout(startCount, 100)
                }    
             }
             startCount()
        })
    }
   
</script>

<template>
    <section class="bg-black mt-56 relative" id="about">
        <div class="absolute rounded-sm bg-yellow flex text-black -top-9 md:-top-16 right-14 md:[13rem] lg:right-[18rem]">
            <div class="p-1 md:p-3 text-center">
                <div class="flex justify-center">
                    <h2 id="counter" class="text-3xl md:text-5xl font-bold" data-counter="4">0</h2>
                    <p class="text-xl md:text-3xl">+</p>
                </div>
                <p class="text-xs text-light md:text-base">project created</p>
            </div>
            <div class="p-1 md:p-3 text-center">
                <div class="flex justify-center font-bold">
                    <h2 id="counter" class="text-3xl md:text-5xl" data-counter="328">0</h2>
                    <p class="text-xs">cup</p>
                </div>
                <p class="text-xs md:text-base">drank of coffee 2022</p>
            </div>
        </div>
        <article class="w-full md:w-[90%] lg:w-[65%] mx-auto py-32 flex flex-col-reverse md:flex-row justify-around">
            <div ref="toolsAnimate" class="mt-20" aria-label="tools">
                <h1 class="text-center text-xl my-2 text-gray-300">Tools</h1>
                 <div class="flex flex-wrap justify-center items-center h-max gap-2 md:w-[18rem] py-2 rounded-md">
                    <AboutCardToolsVue :avatar="react" title="React JS" />
                    <AboutCardToolsVue :avatar="vue" title="Vue JS" />
                    <AboutCardToolsVue :avatar="express" title="ExpressJS" />
                    <AboutCardToolsVue :avatar="tailwind" title="Tailwind" />
                    <AboutCardToolsVue :avatar="psql" title="Postgresql" />
                    <AboutCardToolsVue :avatar="figma" title="Figma" />
                </div>
            </div>
            <div ref="aboutAnimate" class="md:text-left text-center" aria-label="information">
                <h1 class="text-lg md:text-2xl mt-2">Hello, I am Hendri alqori</h1>
                <p class="text-sm md:text-base text-gray-400 my-2 px-3 md:px-0 md:w-72">
                    "A former barista and assistant manager with 
                    -+ 2.5 years of experience, wants to bring 
                    this expertise to the field of web development.
                    Have good management, problem solving and 
                    communication skills. Have top skill for- 
                    web development including, React JS, Vue JS,
                    Express JS, Tailwind CSS and Postgresql(DB) . And for web design like Figma"
                </p>

                <div class="flex flex-col justify-center items-center md:items-start md:gap-2 text-sm md:text-[1.1rem]">
                    <span class="flex gap-12">
                        <h3>Fullname </h3>
                        <p class="font-light">Hendri Alqori</p>
                    </span>
                    <span class="flex gap-20">
                        <h3>Age </h3>
                        <p class="font-light">21th</p>
                    </span>
                    <span class="flex gap-4">
                        <h3>Last Education </h3>
                        <p class="font-light">High School</p>
                    </span>
                    <span class="flex gap-4">
                        <h3>Address </h3>
                        <p class="font-light">Landak, West Borneo</p>
                    </span>
                    <span class="flex gap-4">
                        <h3>WhatsApp </h3>
                        <p class="font-light">+62 896 7754 6550</p>
                    </span>
                </div>

                <!-- <div class="mt-2">
                    <button class="p-2 rounded-sm bg-yellow text-black font-medium text-xs">Download CV</button>
                </div> -->
            </div>
        </article>
    </section>
</template>

<style scoped>
    #react {
        animation: rotate  6s infinite ease;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }

    }
</style>