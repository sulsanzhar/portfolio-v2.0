<script setup lang="ts">
const experiences = [
  {
    position: "FullStack Developer at Adalzan",
    bulletPoints: [
      "Интеграция ChatGPT в качестве инструмента искусственного интеллекта для автоматизации юридических консультаций",
      "Реализация функционала с использованием Socket.io для чатов в реальном времени",
      "Улучшение навыков работы с ReactJS, Node.js, JWT и другими технологиями",
      "Участие в проектировании UI/UX и тестировании (unit-тесты, приемочные тесты)",
    ],
    location: "Almaty, Kazakhstan",
    duration: "сент 2023 - нояб 2024",
    technologies: [
      "React", "React Router DOM", "Redux", "TypeScript", "Sass", "Material UI",
      "Node.js", "Express.js", "PostgreSQL", "Vite", "GitLab", "Git", "OpenAI API (ChatGPT)"
    ]
  }
]
</script>

<template>
    <div class="pt-35 mx-auto">
        <h2
            class="text-center text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight mb-12 sm:mb-20"
        >
            Опыт работы
        </h2>

        <div class="flex flex-col gap-10">
            <div
                v-for="exp in experiences"
                :key="exp.position"
                class="flex flex-col md:flex-row gap-4"
            >
                <p
                    class="md:w-1/4 text-base sm:text-lg md:text-xl pl-1 pt-1 md:pl-4 md:pt-4 text-gray-300"
                >
                    {{ exp.duration }}
                </p>
                <div
                    class="flex-1 p-4 bg-white/10 backdrop-blur-3xl rounded-lg"
                >
                    <h3 class="text-lg sm:text-xl font-semibold">
                        {{ exp.position }}
                    </h3>
                    <p class="italic mt-1 text-sm sm:text-base text-gray-300">
                        {{ exp.location }}
                    </p>
                    <ul
                        class="list-disc list-inside mt-4 space-y-1 text-sm sm:text-base"
                    >
                        <li v-for="(point, i) in exp.bulletPoints" :key="i">
                            {{ point }}
                        </li>
                    </ul>
                    <ul class="mt-4 italic flex items-center flex-wrap gap-2">
                        <li
                            v-for="(tech, i) in exp.technologies"
                            :key="i"
                            class="border border-gray-400 px-2 py-0.5 rounded-md text-sm bg-white/10"
                        >
                            {{ tech }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
