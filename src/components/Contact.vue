<template>
    <div class="my-12 md:my-12 pt-32 pb-20">
        <div class="text-center" :class="{'animate-fade-down': isVisible}">
            <h1
                class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-20"
            >
                Связаться со мной
            </h1>
        </div>
        <div
            id="contact"
            class="grid md:grid-cols-2 gap-4 relative"
            ref="contactSection"
        >
            <!--
      <div
        class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
      ></div>
      -->
            <div
                :class="{'animate-slide-left': isVisible}"
                class="z-10 text-center mx-auto md:text-left md:mx-0"
            >
                <h5 class="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p class="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div
                    class="flex items-center flex-row gap-2 justify-center md:justify-normal"
                >
                    <a
                        href="https://github.com/sulsanzhar"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon
                            name="fa-github-square"
                            class="text-black h-[45px] w-[45px] duration-300 ease-in-out hover:text-[white]"
                            animation="float"
                            hover
                        />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon
                            name="io-logo-linkedin"
                            class="text-blue-600 h-[45px] w-[45px] duration-300 ease-in-out hover:text-[white]"
                            animation="float"
                            hover
                        />
                    </a>
                    <a
                        href="https://wa.me/87776813503"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon
                            name="io-logo-whatsapp"
                            class="text-green-500 h-[45px] w-[45px] duration-300 ease-in-out hover:text-white cursor-pointer"
                            animation="float"
                            hover
                        />
                    </a>
                    <a
                        href="https://t.me/sulsanzhar"
                        target="_blank"
                        rel="noopener"
                    >
                        <v-icon
                            name="co-telegram"
                            class="text-blue-400 h-[45px] w-[45px] duration-300 ease-in-out hover:text-[white]"
                            animation="float"
                            hover
                        />
                    </a>
                </div>
            </div>

            <div :class="{'animate-slide-right': isVisible}">
                <p v-if="emailSubmitted" class="text-green-500 text-sm mt-2">
                    Email sent successfully!
                </p>

                <form
                    v-else
                    @submit.prevent="handleSubmit"
                    class="flex flex-col"
                >
                    <div class="mb-6">
                        <label
                            for="email"
                            class="text-white block mb-2 text-sm font-medium"
                        >
                            Your email
                        </label>
                        <input
                            v-model="form.email"
                            type="email"
                            id="email"
                            required
                            class="bg-transparent border border-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9] focus:placeholder-transparent focus:border-white focus:outline-none"
                            placeholder="example@gmail.com"
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            for="subject"
                            class="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            v-model="form.subject"
                            type="text"
                            id="subject"
                            required
                            class="bg-transparent border border-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9] focus:placeholder-transparent focus:border-white focus:outline-none"
                            placeholder="Frontend developer position in the company ..."
                        />
                    </div>

                    <div class="mb-6">
                        <label
                            for="message"
                            class="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            v-model="form.message"
                            id="message"
                            class="bg-transparent border border-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 placeholder-[#9CA2A9] focus:placeholder-transparent focus:border-white focus:outline-none"
                            placeholder="We'd like to offer you a job"
                        />
                    </div>

                    <button
                        type="submit"
                        class="bg-transparent border border-[#9CA2A9] text-[#9CA2A9] bg-primary-500 hover:bg-primary-600 font-medium py-4 px-3 rounded-lg w-2xs mx-auto hover:bg-[#5a5abc] hover:text-[white] hover:border-[transparent] ease-in-out duration-300 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emailSubmitted = ref(false)
const form = ref({
  email: '',
  subject: '',
  message: ''
})

const contactSection = ref<HTMLElement | null>(null)

const isVisible = ref(false)  // для управления классами анимации

const handleScroll = () => {
  if (!contactSection.value) return

  const rect = contactSection.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // Если верх блока вошел в видимую часть экрана с небольшим запасом (например, 100px)
  if (rect.top < windowHeight - 100) {
    isVisible.value = true
    window.removeEventListener('scroll', handleScroll) // чтобы не дергать лишний раз
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Проверим сразу, если блок уже виден при загрузке
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleSubmit = async () => {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form.value)
  })

  if (response.status === 200) {
    console.log('Message sent.')
    emailSubmitted.value = true
  }
}
</script>

<style scoped>
/* Плавное появление сверху + небольшой сдвиг вниз */
@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-down {
  animation: fadeDown 0.7s ease forwards;
}

/* Появление слева с небольшим сдвигом */
@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-left {
  animation: slideLeft 0.7s ease forwards;
}

/* Появление справа с небольшим сдвигом */
@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.animate-slide-right {
  animation: slideRight 0.7s ease forwards;
}
</style>
