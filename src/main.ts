import { createApp } from "vue";
import "./style.css";
import { MotionPlugin } from "@vueuse/motion";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
    RiZhihuFill,
    HiLink,
    FaGithubAlt,
    FaGithubSquare,
    CoGithub,
} from "oh-vue-icons/icons";

import App from "./App.vue";

addIcons(RiZhihuFill, HiLink, FaGithubAlt, FaGithubSquare, CoGithub);

const app = createApp(App);

app.component("v-icon", OhVueIcon);
app.use(MotionPlugin);

app.mount("#app");
