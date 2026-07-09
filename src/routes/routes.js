import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Intro.vue";
import Pecho from "../views/Pecho.vue";
import Espalda from "../views/Espalda.vue";
import Brazo from "../views/Brazo.vue";
import Pierna from "../views/Pierna.vue";

const routes = [
  { path: "/", component: Intro },
  { path: "/pecho", component: Pecho },
  { path: "/espalda", component: Espalda },
  { path: "/brazo", component: Brazo },
  { path: "/pierna", component: Pierna },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
