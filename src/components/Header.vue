<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      history.replaceState(null, '', window.location.pathname)
    }, 500)
    isOpen.value = false
  }
}

function handleResize() {
  if (window.innerWidth >= 768) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

watch(isOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<template>
    <header class="flex justify-between items-center p-4 relative z-50">
        <div>
            <h1 class="text-[clamp(20px,4vw,30px)] font-bold">
                Sanzhar <span class="text-[#5865ec]">Sultanov</span>
            </h1>
        </div>

        <ul class="hidden lg:flex gap-10 items-center text-2xl">
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out whitespace-nowrap"
                @click="scrollToSection('experience')"
            >
                Опыт работы
            </li>
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('projects')"
            >
                Проекты
            </li>
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('skills')"
            >
                Навыки
            </li>
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('education')"
            >
                Образование
            </li>
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('contact')"
            >
                Контакты
            </li>
        </ul>

        <button
            @click="toggleMenu"
            class="lg:hidden flex flex-col justify-between w-8 h-6 relative z-60"
            aria-label="Toggle menu"
        >
            <span
                :class="[
          'block h-1 w-full bg-white rounded transition-transform duration-300',
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        ]"
            ></span>
            <span
                :class="[
          'block h-1 w-full bg-white rounded transition-opacity duration-300',
          isOpen ? 'opacity-0' : 'opacity-100'
        ]"
            ></span>
            <span
                :class="[
          'block h-1 w-full bg-white rounded transition-transform duration-300',
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        ]"
            ></span>
        </button>

        <transition name="fade">
            <nav
                v-if="isOpen"
                class="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center"
                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
            >
                <div
                    class="flex flex-col items-center space-y-10 text-4xl text-white"
                >
                    <a
                        href="#"
                        @click.prevent="scrollToSection('experience')"
                        class="hover:text-[#5865ec] transition text-center w-full max-w-md"
                        >Опыт работы</a
                    >
                    <a
                        href="#"
                        @click.prevent="scrollToSection('projects')"
                        class="hover:text-[#5865ec] transition text-center w-full max-w-md"
                        >Проекты</a
                    >
                    <a
                        href="#"
                        @click.prevent="scrollToSection('education')"
                        class="hover:text-[#5865ec] transition text-center w-full max-w-md"
                        >Образование</a
                    >
                    <a
                        href="#"
                        @click.prevent="scrollToSection('contact')"
                        class="hover:text-[#5865ec] transition text-center w-full max-w-md"
                        >Контакты</a
                    >
                </div>
            </nav>
        </transition>
    </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
