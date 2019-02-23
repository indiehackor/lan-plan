import VueRouter from 'vue-router'
import Login     from './modules/login/Login'
import Main      from './modules/MainView/Main'
import Rate      from './modules/Rate/Rate'
import Rank      from './modules/Rank/Rank'
import Register  from './modules/login/Register'

const router = new VueRouter({
  mode  : 'history',
  routes: [
    {
      path    : '/', component: Main,
      children: [
        {
          path     : 'rate',
          component: Rate
        },
        {
          path     : 'rank',
          component: Rank
        }
      ]
    },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
})

export default router
