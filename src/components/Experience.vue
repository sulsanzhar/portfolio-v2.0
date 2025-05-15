<template>
    <div id="experience" class="pt-35 scroll-smooth">
        <h2
            class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-20"
        >
            Проекты
        </h2>
        <div ref="container" class="space-y-10">
            <div ref="child">
                <div
                    class="flex flex-col md:flex-row md:justify-between md:gap-6"
                >
                    <div
                        v-for="(project, index) in projects"
                        :key="index"
                        class="flex-1 p-4 rounded-lg bg-white/7 backdrop-blur-3xl border border-white/20 flex flex-col"
                    >
                        <div class="flex justify-between mb-4">
                            <h2 class="text-xl">{{ project.title }}</h2>
                            <div class="flex items-center gap-2.5">
                                <a
                                    target="_blank"
                                    class="hover:text-[#007bff] ease-in-out duration-300"
                                    :href="project.siteLink"
                                >
                                    <v-icon class="size-8" name="hi-link" />
                                </a>
                                <a
                                    target="_blank"
                                    class="hover:text-[black] ease-in-out duration-300"
                                    :href="project.githubLink"
                                >
                                    <v-icon class="size-8" name="co-github" />
                                </a>
                            </div>
                        </div>
                        <p class="mb-2 flex-grow">{{ project.description }}</p>
                        <p class="mb-0 text-sm italic">{{ project.tech }}</p>
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

const projects = [
  {
    title: 'Sneakers Shop App',
    description: `SPA-приложение на Vue 3 для продажи кроссовок с полным клиентским функционалом. Реализована сортиров-ка товаров по цене (по убыванию и возрастанию), поиск по названию с функцией debounce для предотвращения избыточных запросов к API. Добавление товаров в корзину и список желаний, поддержка пагинации. Корзина представлена в виде всплывающего окна справа. Реализованы отдельные страницы: история заказов и избранное.`,
    tech: 'Технологии: Vue 3, TypeScript, Pinia, Vue Router, Axios, Tailwind CSS, Vite, Vercel',
    githubLink: 'https://github.com/sulsanzhar/vue-sneakers',
    siteLink: 'https://sneakers-shop-two-self.vercel.app/'
  },
  {
    title: 'ToDo List App',
    description: `Приложение для управления задачами с синхронизацией в реальном времени и хранением состояния через Firebase. Включает динамический поиск задач с фильтрацией, сортировку по статусу, полную CRUD-функциональность и визуальное завершение задач через зачёркивание. Развёрнуто на Vercel.`,
    tech: 'Технологии: Vue 3, TypeScript, Pinia, Firebase, Axios, Vite, Vercel',
    githubLink: 'https://github.com/sulsanzhar/vue-todo',
    siteLink: 'https://sanzhik.vercel.app/'
  },
  {
    title: 'Vue Pizza App',
    description: `SPA-приложение на Vue 3 для заказа пиццы. Пользователь может выбирать пиццу, указывая её размер и тип (тонкое или традиционное тесто). Реализована сортировка пицц по категориям (мясные, вегетарианские и т.д.), по цене, популярности, алфавиту, а также по возрастанию и убыванию. Приложение включает управление корзиной, маршрутизацию и чистую компонентную архитектуру с акцентом на производительность и удобство использования.`,
    tech: 'Технологии: Vue 3, TypeScript, Pinia, Vue Router, Axios, PrimeVue, Vite, Vercel',
    githubLink: 'https://github.com/sulsanzhar/vue-pizza',
    siteLink: 'https://vue-pizza-app-one.vercel.app/'
  }
]
</script>
