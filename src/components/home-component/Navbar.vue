<script setup>
    import { ref, onMounted } from 'vue';
    import { useMotion } from '@vueuse/motion';


    const nav = ref(null)
    const translate = ref(600) 

    useMotion(nav, {
        initial : {
            opacity : 0,
            y : 200
        },
        visibleOnce : {
            opacity : 1,
            y : 0,
            transition : {
                delay : 200
            }
        }
    })

    onMounted(()=> {
        document.querySelectorAll("a")
            .forEach((item) => {
                item.addEventListener("click", (e) => {
                    const item = e.target
                    const prevItemSibling = item.previousElementSibling
                    const nextItemSibling = item.nextElementSibling
                    item.classList.add("active-link")
                    
                    // Fist element sibling
                    prevItemSibling?.classList.remove("active-link") 
                    nextItemSibling?.classList.remove("active-link") 

                    // Second Element sibling
                    prevItemSibling?.previousElementSibling?.classList.remove("active-link") 
                    nextItemSibling?.nextElementSibling?.classList.remove("active-link")

                    prevItemSibling?.previousElementSibling?.previousElementSibling?.classList.remove("active-link") 
                    nextItemSibling?.nextElementSibling?.nextElementSibling?.classList.remove("active-link")
                })
            })

        window.addEventListener("scroll", navbar)

        if(window.innerWidth >= 768) {
            translate.value = 0
        }
    })
           
    const navbar = () => {
        if(window.scrollY > 543) {
            nav.value.classList.add("header")
        }else {
            nav.value.classList.remove("header")
        }
    }

    const showNavbar = () => {
        translate.value = 0
    }

    const closeNavbar = () => {
        if(window.innerWidth < 768) {
            translate.value = 600
        }
    }
    
</script>

<template>
    <header ref="nav" class="fixed left-0 right-0 py-6 z-50 transition-all duration-100">
        <section class="flex justify-between w-[65%] mx-auto ">
            <h1 class="text-lg md:text-xl lg:text-2xl">Hendri Alqori</h1>
            <div @click="showNavbar" class="md:hidden" id="hamburger-nav">
                <div class="satu"></div>
                <div class="dua"></div>
                <div class="tiga"></div> 
            </div>
            <nav 
             :style="{transform:`translateX(${translate}px)`}"
             class="fixed md:relative w-[100%] md:w-max h-max top-0 md:p-0 p-7 grid md:flex gap-10 md:gap-5 lg:gap-8 bg-gray-800 md:bg-transparent text-base lg:text-xl font-light"
             >
                <span @click="closeNavbar" class="fixed md:hidden right-28 top-4 text-3xl">&#x292C;</span>
                <a @click="closeNavbar" class="active-link" href="#home">
                    Home
                </a>
                <a @click="closeNavbar"  href="#about">
                    About me
                </a>
                <a @click="closeNavbar" href="#portfolio">
                    Portfolio
                </a>
                <a @click="closeNavbar"  href="#contact">
                   Contact
                </a>
            </nav>
        </section>
    </header>
</template>

<style scoped>
    .active-link {
        color: #FFFF00;
    }
    header { 
        backdrop-filter: blur(10px);
    }
    .header {
        background-color: black;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    nav {
        border-radius: 0 0 0 30px ;
        transition: all .7s ease;
    }

    #hamburger-nav { 
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        cursor: pointer;

    }

    .satu, .dua, .tiga {
        width: 30px;
        height: 3px;
        background-color: yellow;
        margin-top: 5px;
    }
</style>