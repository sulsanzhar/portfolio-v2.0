<script setup lang="ts">
import Header from './components/Header.vue'
import Promo from './components/Promo.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'
</script>

<template>
    <div
        class="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
        <div
            class="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
            style="background-image: url('https://img.freepik.com/premium-photo/dark-soft-blurred-abstract-red-blue-background-defocus-gradient-image_305419-617.jpg')"
        ></div>
        <div
            class="absolute top-0 z-[-5] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(0,0,0,0))]"
        ></div>
        <div
            class="backdrop-blur-2xl bg-white/5 border border-white/10 p-6 md:p-10 shadow-xl"
        >
            <div class="container mx-auto">
                <Header />
                <Promo />
                <Experience />
                <Education />
                <Contact />
            </div>
        </div>
    </div>
</template>
