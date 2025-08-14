<script setup lang="ts">
import { ref, onMounted } from 'vue'

const role = 'Frontend Developer'
const displayedText = ref('')
let charIndex = 0
let isDeleting = false

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})


function typeEffect() {
  if (!isDeleting) {
    displayedText.value = role.slice(0, charIndex + 1)
    charIndex++

    if (charIndex === role.length) {
      isDeleting = true
      setTimeout(typeEffect, 2000)
      return
    }
    setTimeout(typeEffect, 100)
  } else {
    displayedText.value = role.slice(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      setTimeout(typeEffect, 500)
      return
    }
    setTimeout(typeEffect, 50)
  }
}

onMounted(() => {
  typeEffect()
})
</script>

<template>
    <div class="mt-40 pb-4">
        <div
            class="flex flex-wrap-reverse gap-2 md:gap-10 items-center justify-around"
        >
            <div
                class="w-full lg:w-1/2 transition-left"
                :class="{ 'visible': isVisible }"
            >
                <div class="flex flex-col items-center lg:items-start">
                    <h2
                        class="text-animation text-2xl md:text-4xl lg:text-5xl tracking-tight"
                    >
                        I’m a <span>{{ displayedText }}</span>
                    </h2>

                    <p
                        class="my-2 text-center md:text-left max-w-xl py-6 text-xl tracking-tighter"
                    >
                        Frontend-разработчик с прочной теоретической подготовкой
                        и опытом разработки SPA на Vue.js. Дипломный проект
                        защитил на оценку 90/100. Ориентирован на развитие,
                        повышение квалификации и достижение результатов в
                        команде.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1FVNC7SHuwa1DNNg2Eht-kQgF5ypRW9T-/view?usp=sharing"
                        target="_blank"
                        class="text-xl font-medium text-white bg-[#5a5abc] border border-[#5a5abc] rounded-[15px] px-6 py-4 transition-all duration-300 ease-in-out hover:bg-[#37376c] hover:border-[#37376c] hover:text-[#e2e2e2] shadow-md hover:shadow-lg"
                    >
                        Резюме
                    </a>
                </div>
            </div>
            <div
                class="promo__inner-photo transition-right"
                :class="{ 'visible': isVisible }"
            >
                <div class="promo__inner-photo-inner">
                    <img
                        src="https://i.postimg.cc/XYWSdLsT/photo-2023-08-28-01-21-21.jpg"
                        alt="promo-img"
                    />
                    <div class="animation"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.promo__inner-photo
  max-width: 50%
  border-radius: 50%
  .promo__inner-photo-inner
    width: 150%
    border-radius: 50%
    position: relative
    left: calc(50% - (150% / 2))
    display: flex
    justify-content: center
    align-items: center
    z-index: 10
    @media (min-width: 768px)
      width: 100%
      height: 100%
      left: 0

    @media (min-width: 1024px)
      width: 400px
      height: 400px
    img
      position: relative
      z-index: 5
      height: 100%
      width: 100%
      border-radius: 50%
      cursor: pointer
      object-fit: cover
      transition: .3s
    img:hover
      transform: scale(1.01)
      filter: drop-shadow(0 0 25px rgb(56, 30, 40))
    .animation
      position: absolute
      height: 101%
      width: 101%
      top: -0.5%
      left: -0.5%
      background-image: conic-gradient(from 90deg, rgb(255 0 98), rgb(56, 30, 40), rgb(255 0 0 / 0%), rgba(255, 255, 255, 0))
      filter: drop-shadow(0 0 35px rgb(56, 30, 40))
      border-radius: 50%
      z-index: 1
      animation: rotate 6s linear infinite
.text-animation span
  color: #5865ec
  transition: opacity 0.3s ease-in-out
  opacity: 1
  display: inline-block


@keyframes rotate
  0%
    rotate: 360deg
  100%
    rotate: 0deg

.transition-left,
.transition-right
  opacity: 0
  transform: translateX(50px)
  transition: opacity 0.8s ease, transform 0.8s ease

.transition-left.visible
  opacity: 1
  transform: translateX(0)


.transition-right
  transform: translateX(-50px)


.transition-right.visible
  opacity: 1
  transform: translateX(0)
</style>
