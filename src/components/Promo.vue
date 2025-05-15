<script setup lang="ts">
import { ref, onMounted } from 'vue'

const role = 'Frontend Developer'
const displayedText = ref('')
let charIndex = 0
let isDeleting = false

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
    <div class="mt-40 pb-4 lg:mb-35">
        <div class="flex flex-wrap items-center justify-around">
            <div class="w-full lg:w-1/2">
                <div class="flex flex-col items-center lg:items-start">
                    <h2 class="text-animation text-5xl tracking-tight">
                        I’m a <span>{{ displayedText }}</span>
                    </h2>

                    <p class="my-2 max-w-xl py-6 text-xl tracking-tighter">
                        Frontend-разработчик с крепкой теоретической базой и
                        практическим опытом создания современных веб-приложений
                        на Vue.js. Успешно защитил дипломный проект «Vue Pizza»
                        с оценкой 90 баллов. Заинтересован в развитии и готов
                        приносить пользу компании через постоянное обучение и
                        улучшение навыков.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1xOegwEN_Y8IZ0-nZYCFRRXfaycz75QFe/view?usp=sharing"
                        target="_blank"
                        class="bg-stone-50 text-stone-900 p-3 text-xl lg:p-4 inline-block rounded-2xl"
                    >
                        Резюме
                    </a>
                </div>
            </div>
            <div class="promo__inner-photo">
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
    width: 400px
    height: 400px
    border-radius: 50%
    position: relative
    display: flex
    justify-content: center
    align-items: center
    z-index: 10
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
</style>
