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

// const $OTAP.config.globalProperties.$OTAP = OTAP; 
// app.$OTAP;
// if(app.config.globalProperties.$OTAP != OTAP){app.config.globalProperties.$OTAP = OTAP}

// app global components

console.log( window.location.href)
console.log( OTAP)

// mount app
app.mount('#app')


