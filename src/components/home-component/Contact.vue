<script setup>
    import { ref } from 'vue';
    import { sendForm } from '@emailjs/browser'
    import { useMotion } from '@vueuse/motion';

    const email =  ref("")
    const subject = ref("")
    const message = ref("")
    const form = ref(null)
    const btn = ref(null)
    const contactAnimate = ref(null)

    const handleSubmitEmail = () => {
        btn.value.classList.add("btn-submit")
        btn.value.textContent = "Sending ..."
        sendForm("service_vh9lebb","template_nwiw5jg", form.value ,"WNeCRYLjPcnEhvMlb")
            .then((result)=> {
                email.value = ""
                subject.value = ""
                message.value = ""

                btn.value.classList.remove("btn-submit")
                btn.value.textContent = "Send"
                
            })
            .catch((error) => {
                console.log(error?.text)
            })

    }

     useMotion(contactAnimate, {
        initial : {
            y : 200,
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1,
            transition : {
             delay : 200   
            }
        }
    })
</script>

<template>
    <section  id="contact" class="bg-black py-32 text-black">
        <div ref="contactAnimate" class="w-[80%] md:w-[68%] lg:w-[40%] mx-auto text-sm md:text-xl" aria-label="form-container">
            <h1 class="text-yellow mb-6 text-base md:text-xl w-max border-b-2 border-gray-500">Contact me</h1>
            <form ref="form" class="flex flex-col gap-10" @submit.prevent="handleSubmitEmail">
                <input name="from_name" v-model="email" class="rounded-sm p-3 bg-gray-200 focus:outline-yellow focus:bg-white" type="email" placeholder="Your email" required>
                <input name="subject" v-model="subject" class="rounded-sm p-3 bg-gray-200 focus:outline-yellow focus:bg-white" type="text" placeholder="Subject" required>
                <textarea name="message" v-model="message" class="rounded-md p-3 bg-gray-200 focus:outline-yellow focus:bg-white" cols="30" rows="5" placeholder="Your text" required></textarea>
                <button ref="btn"  class="bg-yellow w-[30%] mx-auto p-3 text-lg rounded-md relative" type="submit">Send</button>
            </form>
        </div>
    </section>
</template>


<style scoped>
    
    .btn-submit::after {
        content:"|";
        width: 30px;
        height: 30px;
        right: 30px;
        top:10px;
        border-radius: 100%;
        position: absolute;
        background-color: black;
        color:yellow;
        animation: rotate 1s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
</style>