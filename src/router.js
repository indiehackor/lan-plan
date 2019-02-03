import VueRouter from 'vue-router'
import Login     from './modules/login/Login'
import Ratings   from './modules/ratings/Ratings'
import Rate      from './modules/ratings/components/Rate'
import Rank      from './modules/Rank/Rank'

const router = new VueRouter({
  mode  : 'history',
  routes: [
    {
      path    : '/', component: Ratings,
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
    { path: '/login', component: Login }
  ]
})

export default router
