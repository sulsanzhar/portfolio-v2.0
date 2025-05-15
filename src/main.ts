import { createApp } from "vue";
import "./style.css";
import { MotionPlugin } from "@vueuse/motion";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
    HiLink,
    CoGithub,
    FaGithubSquare,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    CoTelegram,
} from "oh-vue-icons/icons";

import App from "./App.vue";

addIcons(
    HiLink,
    CoGithub,
    FaGithubSquare,
    IoLogoLinkedin,
    IoLogoWhatsapp,
    CoTelegram
);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(MotionPlugin);

app.mount("#app");
