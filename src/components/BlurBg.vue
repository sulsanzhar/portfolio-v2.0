<!-- <script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'

const colors = ['yellow-500', 'orange-500', 'green-500', 'purple-500', 'blue-500', 'pink-500']

const circleRefs = ref<(HTMLElement | null)[]>(new Array(colors.length).fill(null))

const variantKeys = ['animate1', 'animate2', 'animate3', 'animate4', 'animate5', 'animate6'] as const

const circleVariants = {
  animate1: { scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
  animate2: { scale: [1, 1.1, 1], x: [0, 120, 0], y: [0, -60, 0], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } },
  animate3: { scale: [1, 1.3, 1], x: [0, 140, 0], y: [0, 70, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
  animate4: { scale: [1, 1.4, 1], x: [0, 160, 0], y: [0, -80, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
  animate5: { scale: [1, 1.5, 1], x: [0, 180, 0], y: [0, 90, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
  animate6: { scale: [1, 1.6, 1], x: [0, 200, 0], y: [0, -100, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }
} as const

onMounted(() => {
  circleRefs.value.forEach((el, index) => {
    if (!el) return
    const key = variantKeys[index]
    useMotion(el, {
      initial: { scale: 1 },
      animate: circleVariants[key]
    })
  })
})
</script>

<template>
    <div
        class="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-70"
    >
        <div
            v-for="(color, index) in colors"
            :key="index"
            :ref="(el) => { circleRefs.value[index] = el }"
            :class="[
        'absolute rounded-full',
        `bg-${color}`,
        `w-[${350 + index * 10}px]`,
        `h-[${250 + index * 10}px]`
      ]"
        />
    </div>
</template> -->
