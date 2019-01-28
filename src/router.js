import VueRouter from 'vue-router'
import Login     from './modules/login/Login'
import Ratings   from './modules/ratings/Ratings'

const router = new VueRouter({
  mode  : 'history',
  routes: [
    { path: '/', component: Ratings },
    { path: '/login', component: Login }
  ]
})

export default router
