<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('./components/Header.vue'))
const Promo = defineAsyncComponent(() => import('./components/Promo.vue'))
const Experience = defineAsyncComponent(() => import('./components/Experience.vue'));
const Projects = defineAsyncComponent(() => import('./components/Projects.vue'))
const Education = defineAsyncComponent(() => import('./components/Education.vue'))
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
const Skills = defineAsyncComponent(() => import('./components/Skills.vue'));
</script>

<template>
    <div
        class="overflow-x-hidden text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
        <div
            class="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
            style="
        background-image:
          radial-gradient(
            ellipse 80% 80% at 50% -20%,
            rgba(120, 119, 198, 0.2),
            rgba(0, 0, 0, 0.6)
          ),
          url('/bg.avif');
        background-blend-mode: overlay;
      "
        />
        <div class="backdrop-blur-xl bg-white/5 p-6 md:p-10">
            <div class="container mx-auto">
                <Header />
                <Promo />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Contact />
            </div>
        </div>
    </div>
</template>
