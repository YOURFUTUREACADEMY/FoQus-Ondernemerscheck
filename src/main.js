import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import OTAP from "./scripts/otap"


// create app
const app = createApp(App);

// app use
app.use(router).use(store);

// app globals
app.config.globalProperties.$OTAP = OTAP;

// app global components


// mount app
app.mount('#app')


