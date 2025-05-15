<template>
    <div id="education" class="pt-40 mt-5 scroll-smooth">
        <h2
            class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-[60px]"
        >
            Образование
        </h2>
        <div ref="container" class="space-y-10">
            <div ref="child">
                <div class="flex flex-col md:justify-between md:gap-6">
                    <div
                        v-for="(education, index) in educations"
                        :key="index"
                        class="flex-1 p-4 rounded-lg bg-white/7 backdrop-blur-3xl border border-white/20 flex flex-col"
                    >
                        <div class="flex justify-between">
                            <h2 class="text-2xl">{{ education.name }}</h2>
                            <div class="flex items-center gap-2.5">
                                <p class="mb-0 text-xl italic">
                                    {{ education.duration }}
                                </p>
                            </div>
                        </div>
                        <p class="text-xl mb-2 flex-grow">
                            {{ education.specialization }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const container = ref(null)
const child = ref(null)

useMotion(container, {
  initial: { opacity: 0, y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
})

useMotion(child, {
  initial: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
})

const educations = [
  {
    name: 'Международный университет информационных технологий',
    specialization: `Бакалавр по специальности "Программная инженерия"`,
    duration: "2024 – 2027",
    uniLink: 'https://github.com/sulsanzhar/vue-sneakers',
  },
  {
    name: 'Инновационный технический колледж',
    specialization: `Диплом по специальности "Компьютерная инженерия и программное обеспечение"`,
    duration: "2020 – 2024",
    uniLink: 'https://github.com/sulsanzhar/vue-sneakers',
  },
  {
    name: 'Attractor School Almaty',
    specialization: `FullStack Developer (ReactJS + NodeJS)`,
    duration: "2023 - 2024",
    uniLink: 'https://github.com/sulsanzhar/vue-sneakers',
  }
]
</script>
