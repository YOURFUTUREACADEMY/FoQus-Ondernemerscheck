import { createRouter, createWebHashHistory } from 'vue-router'
import intro from '../views/intro.vue'
import vragen from '../views/vragen.vue'
import scorescherm from '../views/scorescherm.vue'
//TO DO Remove score test
import testMenu from '../views/testMenu.vue'
import storetest from '../views/storetest.vue'
import metertest from '../views/metertest.vue'
import berekeningTest from '../views/berekeningTest.vue'
import zaptest from '../views/zaptest.vue'
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
    path:"/testMenu",
    name: "testMenu",
    component: testMenu,
  },
  {
    path:"/berekeningTest",
    name: "berekeningTest",
    component: berekeningTest,
  },
  {
    path:"/storetest",
    name: "storetest",
    component: storetest,
  },
  {
    path:"/metertest",
    name: "metertest",
    component: metertest,
  },
  {
    path:"/zaptest",
    name: "zaptest",
    component: zaptest,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router
