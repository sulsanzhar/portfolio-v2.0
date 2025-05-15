<template>
    <div class="my-12 md:my-12 pt-50 ">
        <div class="text-center">
            <h1
                class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-40"
            >
                Связаться со мной
            </h1>
        </div>
        <div id="contact" class="grid md:grid-cols-2 gap-4 relative">
            <!-- <div
            class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
        ></div> -->
            <div class="z-10">
                <h5 class="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p class="text-[#ADB7BE] mb-4 max-w-md">
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!
                </p>
                <div class="flex items-center flex-row gap-2">
                    <a href="https://github.com" target="_blank" rel="noopener">
                        <img
                            width="40px"
                            height="40px"
                            src="../assets/github-icon.png"
                            alt="github-icon"
                        />
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            width="50px"
                            height="50px"
                            src="../assets/linkedin-icon.webp"
                            alt="linkedin-icon"
                        />
                    </a>
                    <a
                        href="https://wa.me/87776813503"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            width="40px"
                            height="40px"
                            src="../assets/whatsapp-icon.svg"
                            alt="whatsapp-icon"
                        />
                    </a>
                    <a
                        href="https://t.me/sulsanzhar"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            width="40px"
                            height="40px"
                            src="../assets/telegram-icon.png"
                            alt="telegram-icon"
                        />
                    </a>
                </div>
            </div>

            <div>
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
import { ref } from 'vue'

const emailSubmitted = ref(false)

const form = ref({
  email: '',
  subject: '',
  message: ''
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
