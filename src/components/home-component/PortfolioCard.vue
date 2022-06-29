<script setup>
    import { defineProps } from 'vue';
    import Github from '../../assets/github-icon.png'
    import WWW from '../../assets/www.png'

    const { avatar, stack, siteUrl, frontEnd, backEnd } = defineProps({
        avatar : String,
        stack : String,
        siteUrl : String,
        frontEnd : String,
        backEnd : String,
    })
</script>
    
<template>
    <figure id="project-wrapper" class="relative rounded-sm overflow-hidden h-[150px] lg:h-[220px] w-[16rem] lg:w-[25rem] cursor-pointer">
            <img :src="avatar" alt="web">
            <figcaption id="figurcaption" class="py-4 bg-gray-700 transition-all duration-200">
                <div class="flex justify-center gap-5">
                    <a :href="siteUrl" target="_blank">
                        <img  :src="WWW" alt="www-logo">
                    </a>
                    <a :href="frontEnd">
                        <img :src="Github" alt="github-logo">
                    </a>
                    <a v-show="backEnd" :href="backEnd">
                        <img :src="Github" alt="github-logo">
                    </a>
                </div>
                <h1 class="text-center  font-light text-xs lg:text-lg">{{stack}}</h1>
            </figcaption>
        </figure>
</template>

<style scoped>
    #project-wrapper:hover  #figurcaption {
        transform: translateY(-75px);
    }

    @media (min-width: 1024px) {
    #project-wrapper:hover  #figurcaption {
        transform: translateY(-100px);
        
    }
}

</style>