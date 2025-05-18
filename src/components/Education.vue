<template>
    <div id="education" class="pt-56">
        <h2
            class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-20"
        >
            Образование
        </h2>
        <div class="space-y-10">
            <div class="flex flex-col md:justify-between gap-6">
                <div
                    v-for="(education, index) in educations"
                    :key="index"
                    :class="[
            'group relative flex-1 p-4 rounded-lg flex flex-col overflow-hidden cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-white/10 hover:shadow-white/30 transition duration-300',
            isVisible[index] ? 'fade-left' : 'hidden-card'
          ]"
                    @mousemove="(e) => handleMouseMove(e, index)"
                    @mouseleave="() => resetBackground(index)"
                    :style="{ background: cardBackgrounds[index] }"
                    ref="cardsRefs"
                    :data-index="index"
                >
                    <div class="flex justify-between">
                        <h2 class="text-2xl">{{ education.name }}</h2>
                        <div class="hidden md:block items-center gap-2.5">
                            <p class="mb-0 text-xl italic">
                                {{ education.duration }}
                            </p>
                        </div>
                    </div>
                    <p class="text-xl mb-2 flex-grow">
                        {{ education.specialization }}
                    </p>
                    <div class="md:hidden flex items-center gap-2.5">
                        <p class="mb-0 text-xl italic">
                            {{ education.duration }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const educations = [
  {
    name: 'Международный университет информационных технологий',
    specialization: `Бакалавр по специальности "Программная инженерия"`,
    duration: '2024 – 2027',
  },
  {
    name: 'Инновационный технический колледж',
    specialization: `Диплом по специальности "Компьютерная инженерия и программное обеспечение"`,
    duration: '2020 – 2024',
  },
  {
    name: 'Attractor School Almaty',
    specialization: `FullStack Developer (ReactJS + NodeJS)`,
    duration: '2023 - 2024',
  },
]

const cardBackgrounds = ref<string[]>(educations.map(() => ''))
const isVisible = ref<boolean[]>(educations.map(() => false))

const cardsRefs = ref<HTMLElement[]>([])


function handleMouseMove(event: MouseEvent, index: number) {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  cardBackgrounds.value[index] = `
    radial-gradient(400px circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent)
  `
}

function resetBackground(index: number) {
  cardBackgrounds.value[index] = ''
}

let observer: IntersectionObserver | null = null

onMounted(async () => {
  await nextTick()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Number(entry.target.getAttribute('data-index'))
        if (entry.isIntersecting) {
          isVisible.value[index] = true
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  cardsRefs.value.forEach((el) => {
    observer?.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.fade-up {
  animation: fadeSlideUp 0.7s ease forwards;
  opacity: 0;
  animation-delay: var(--delay);
}


.fade-left {
  animation: fadeSlideLeft 1s ease forwards;
  opacity: 0;
}

.fade-right {
  animation: fadeSlideRight 1s ease forwards;
  opacity: 0;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
