<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
});
</script>

<template>
    <div id="skills" class="pt-40">
        <h2
            class="text-center text-4xl md:text-6xl font-medium tracking-tight mb-20"
        >
            Навыки
        </h2>
        <div class="text-white">
            <ul
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
            >
                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/html-icon.webp"
                            alt="HTML icon"
                        />
                    </div>
                    <p class="">HTML</p>
                </li>
                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/css-icon.png"
                            alt="CSS icon"
                        />
                    </div>
                    <p class="">CSS</p>
                </li>
                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/javascript-icon.svg"
                            alt="JavaScript icon"
                        />
                    </div>
                    <p class="">JavaScript</p>
                </li>
                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/typescript-icon.png"
                            alt="TypeScript icon"
                        />
                    </div>
                    <p class="">TypeScript</p>
                </li>
                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/vue-icon.svg"
                            alt="Vue icon"
                        />
                    </div>
                    <p class="">Vue</p>
                </li>

                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/pinia-iconpng.png"
                            alt="Pinia icon"
                        />
                    </div>
                    <p class="">Pinia</p>
                </li>

                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/react-icon.png"
                            alt="React icon"
                        />
                    </div>
                    <p class="">React</p>
                </li>

                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/reduxToolkit-icon.svg"
                            alt="Redux icon"
                        />
                    </div>
                    <p class="">Redux</p>
                </li>

                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/zustand-icon.webp"
                            alt="Zustand icon"
                        />
                    </div>
                    <p class="">Zustand</p>
                </li>

                <li
                    class="fade-in-up card-glow p-3 rounded-2xl border border-gray-400 flex flex-col items-center gap-1 h-fit transition-all duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:border-transparent hover:bg-[rgb(91,74,77)] hover:text-white"
                >
                    <div class="p-3 rounded-[10px]">
                        <img
                            class="w-[50px] h-[50px] object-contain transition duration-300 group-hover:brightness-90"
                            width="50"
                            src="../assets/tanstackQuery-icon.png"
                            alt="TanStack icon"
                        />
                    </div>
                    <p class="">TanStack</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="css">

.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
