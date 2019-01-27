import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBTIm5ZhdwE5g_mcVsG1VDEG0AwpR4EGe8",
  authDomain: "lan-plan.firebaseapp.com",
  databaseURL: "https://lan-plan.firebaseio.com",
  projectId: "lan-plan",
  storageBucket: "lan-plan.appspot.com",
  messagingSenderId: "1030144002720"
};

firebase.initializeApp(config);
export const db = firebase.firestore()

Vue.use(VueFire)

new Vue({
  render: h => h(App),
}).$mount('#app')
