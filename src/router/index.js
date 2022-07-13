import { createRouter, createWebHashHistory } from 'vue-router'
import intro from '../views/intro.vue'
import vragen from '../views/vragen.vue'
import scorescherm from '../views/scorescherm.vue'
import outro from '../views/outro.vue'

const routes = [
  {
    path: "/",
    name: "intro",
    component: intro,
  },
  {
    path:"/vragen",
    name: "vragen",
    component: vragen,
  },
  {
    path:"/scorescherm",
    name: "Scorescherm",
    component: scorescherm,
  },
  {
    path:"/outro",
    name: "outro",
    component: outro,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router
