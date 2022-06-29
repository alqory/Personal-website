<script setup>
    import { onMounted, ref } from 'vue'
    import { useMotion } from '@vueuse/motion'
    import Me from '../../assets/Me.png'
    import Instagram from '../../assets/Instagram.png'
    import Twitter from '../../assets/Twitter.png'
    import Github from '../../assets/Github.png'

    const Title = ref(null)
    const jmtTitle = ref(null)
    const jmtImage = ref(null)

    onMounted(()=> {
        typeWritter()
    })

    const typeWritter = () => {
        const text = ["Frontend Developer  ","IT Enthusiast  "]
        let iText = 0
        let iLetter = 0
        let phrase = ""

        const startLoop = () => {
            Title.value.textContent = phrase
            
            if(iLetter < text[iText].length) {
                phrase += text[iText][iLetter]
                iLetter++
            }
            if(iLetter == text[iText].length) {
                iText = iText < 1 ? 1 : 0
                iLetter = 0
                phrase = ""
                Title.value.textContent = ""
            }
            setTimeout(startLoop, iLetter < 10 ? 150 : 800)       
        }
        startLoop()
    }

    useMotion(jmtTitle, {
        initial : {
            x : -200,
            opacity : 0
        },
        visibleOnce : {
            x : 0,
            opacity : 1,
            transition : {
                delay : 400
            }
        }
    })

    useMotion(jmtImage, {
        initial : {
            x : 200,
            opacity : 0
        },
        visibleOnce : {
            x : 0,
            opacity : 1,
            transition : {
                delay : 500
            }
        }
    })



</script>

<template>
    <section class="w-full md:w-[65%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-40" id="home">
        <div ref="jmtTitle"  class="w-full md:w-[60%] h-max flex flex-col justify-start md:items-start items-center" aria-label="jt-text">
            <p class="text-sm lg:text-xl font-light">Hello there, I Am</p>
            <div class="flex h-max py-5 md:h-[5rem] text-2xl md:text-3xl lg:text-5xl -translate-y-4">
                <h1 ref="Title" class="font-bold"></h1>
                <span class="text-yellow">|</span>
            </div>
            <!-- <div class="font-light text-lg text-gray-300 mt-3">
               <span class="leading-5">
                 
               </span>
                <h3 class="text-yellow text-xs translate-x-40">Ryan Dahl - Creator of NodeJS</h3>
            </div> -->
            <div class="flex gap-3 mt-0 lg:mt-2" aria-label="logo" >
                <a href="https://twitter.com/Hendrialqori" target="_blank">
                    <img  class="h-10 w-10 lg:h-16 lg:w-16" :src="Twitter" alt="twitter-logo" >
                </a>
                <a href="https://www.instagram.com/hendrialqory/" target="_blank">
                    <img class="h-10 w-10 lg:h-16 lg:w-16" :src="Instagram" alt="instagram-logo" width="60">
                </a>
                <a href="https://www.github.com/alqory" target="_blank">
                    <img class="h-10 w-10 lg:h-16 lg:w-16" :src="Github" alt="instagram-logo" width="60">
                </a>
            </div>
        </div>
        <img ref="jmtImage" class="mb-10 md:mb-0 w-40 h-[11.5rem] lg:w-[17rem] lg:h-[19rem]" :src="Me" alt="personal-logo">
    </section>
</template>