<script setup lang="ts">
function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      history.replaceState(null, '', window.location.pathname)
    }, 500)
  }
}
</script>

<template>
    <header class="flex justify-between items-center">
        <div>
            <h1 class="text-3xl">
                Sanzhar <span class="text-[#5865ec]">Sultanov</span>
            </h1>
        </div>
        <ul class="flex gap-10 items-center text-2xl">
            <li
                class="cursor-pointer hover:text-[#5865ec] duration-300 ease-in-out"
                @click="scrollToSection('experience')"
            >
                Проекты
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
    </header>
</template>
