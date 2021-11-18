import { createRouter, createWebHashHistory } from 'vue-router'
import intro from '../views/intro.vue'
import vragen from '../views/vragen.vue'
import resultaat from '../views/resultaat.vue'

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
    path:"/resultaat",
    name: "resultaat",
    component: resultaat,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router
