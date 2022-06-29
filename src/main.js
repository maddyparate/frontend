import { createApp } from 'vue'
import {Bootstrap} from 'bootstrap'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
Vue.use(Bootstrap)


createApp(App).use(router).mount('#app')
