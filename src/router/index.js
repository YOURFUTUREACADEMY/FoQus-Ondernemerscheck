import { createRouter, createWebHistory } from "vue-router";
import intro from "../views/intro.vue";

const routes = [
    {
        path: "/intro",
        name: "intro",
        component: intro,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

export default router;