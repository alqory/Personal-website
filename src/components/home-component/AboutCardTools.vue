<script setup>
    import { defineProps } from 'vue';
    import { useMotion } from '@vueuse/motion';

    const { animate ,avatar, title } = defineProps({
        animate : String,
        avatar : String,
        title : String
    })
</script>

<template>
    <div class="flex flex-col h-max justify-center items-center rounded-md p-4">
        <img  :src="avatar" :alt="title">
        <p class="font-light px-6">{{ title }}</p>
    </div>
</template>