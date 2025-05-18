<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

// Чтобы при изменении размера экрана закрывать меню и убирать блюр
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
</script>

<template>
    <header class="flex justify-between items-center p-4 relative z-50">
        <div>
            <h1 class="text-xl md:text-3xl font-bold">
                Sanzhar <span class="text-[#5865ec]">Sultanov</span>
            </h1>
        </div>

        <!-- Десктоп меню -->
        <ul class="hidden md:flex gap-10 items-center text-2xl">
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('experience')"
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

        <!-- Кнопка бургера -->
        <button
            @click="toggleMenu"
            class="md:hidden flex flex-col justify-between w-8 h-6 relative z-60"
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

        <!-- Фуллскрин меню с блюром и текстом по центру по горизонтали, но меню начинается сверху -->
        <transition name="fade">
            <nav
                v-if="isOpen"
                class="fixed inset-0 z-50 flex justify-center items-start pt-40"
                style="background-color: rgba(0, 0, 0, 0.6); backdrop-filter: blur(100%); -webkit-backdrop-filter: blur(100%); min-height: 100vh;"
            >
                <div
                    class="flex flex-col items-center space-y-10 text-4xl text-white mt-0"
                >
                    <a
                        href="#"
                        @click.prevent="scrollToSection('experience')"
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
