import Vue       from 'vue'
import VueFire   from 'vuefire'
import Vuex      from 'vuex'
import firebase  from 'firebase/app'
import 'firebase/auth'
import VueRouter from 'vue-router'
import router    from './router'
import App       from './App.vue'
import store     from './store'

Vue.config.productionTip = false

const config = {
  apiKey           : 'AIzaSyBTIm5ZhdwE5g_mcVsG1VDEG0AwpR4EGe8',
  authDomain       : 'lan-plan.firebaseapp.com',
  databaseURL      : 'https://lan-plan.firebaseio.com',
  projectId        : 'lan-plan',
  storageBucket    : 'lan-plan.appspot.com',
  messagingSenderId: '1030144002720'
}

firebase.initializeApp(config)

export const fb = firebase


Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
