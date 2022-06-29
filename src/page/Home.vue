<script setup>
    import { onBeforeMount } from 'vue';
    import NavbarVue from '../components/home-component/Navbar.vue';
    import JumbotronVue from '../components/home-component/Jumbotron.vue'
    import AboutVue from '../components/home-component/About.vue';
    import PortfolioVue from '../components/home-component/Portfolio.vue';
    import ContactVue from '../components/home-component/Contact.vue';
    import FooterVue from '../components/home-component/Footer.vue'
    
</script>

<template>
    <section class="mx-auto bg-dark text-white" id="home">
        <NavbarVue />
         <JumbotronVue />
         <AboutVue />
        <PortfolioVue />
        <ContactVue />
        <FooterVue />
    </section>
    
</template>