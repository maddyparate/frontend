import Vue from 'vue'
import VueRouter from 'vue-router'
import AddEmployee from '../components/AddEmployee.vue'

Vue.use(VueRouter)


const routes = [
 {
    name: "AddEmployee",
    component: AddEmployee,
    path: "/addEmployee",
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;