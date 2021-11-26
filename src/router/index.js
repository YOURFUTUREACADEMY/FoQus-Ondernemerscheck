import { createRouter, createWebHashHistory } from 'vue-router'
import intro from '../views/intro.vue'
import vragen from '../views/vragen.vue'
import scorescherm from '../views/scorescherm.vue'
//TO DO Remove score test
import storetest from '../views/storetest.vue'

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
  //TO DO remove score test
  {
    path:"/storetest",
    name: "storetest",
    component: storetest,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router
