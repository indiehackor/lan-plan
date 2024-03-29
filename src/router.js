import VueRouter from 'vue-router'
import Login     from './modules/login/Login'
import Main      from './modules/MainView/Main'
import Rate      from './modules/Rate/Rate'
import Rank      from './modules/Rank/Rank'
import Register  from './modules/login/Register'
import Sent      from './modules/login/Sent'

const router = new VueRouter({
  mode  : 'history',
  routes: [
    { path: '/', redirect: '/rank' },
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
    { path: '/sent', component: Sent },
    { path: '/register', component: Register }
  ]
})

export default router
