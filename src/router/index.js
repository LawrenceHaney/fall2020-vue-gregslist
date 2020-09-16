import Vue from 'vue'
import VueRouter from 'vue-router'
import CarDetails from '../pages/CarDetails.vue'
import Cars from '../pages/Cars.vue'
import Jobs from '../pages/Jobs.vue'
import Homes from '../pages/Homes.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetails
  },
  {
    path: '/homes',
    name: 'Homes',
    component: Homes
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '*',
    redirect: '/cars'
  }
]

const router = new VueRouter({
  routes
})

export default router
