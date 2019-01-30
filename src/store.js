import Vuex   from 'vuex'
import Vue    from 'vue'
import { fb } from './main'

Vue.use(Vuex)

const state = {
  user: null
}

// GETTERS
export const currentUser = state => state.user

// ACTIONS
export const setCurrentUser     = ({ commit }, user) => commit('setUser', { user })
export const signOutCurrentUser = ({ commit }) => commit('signOut')

// MUTATIONS
export function setUser(state, payload) {
  state.user = payload.user
}

export function signOut(state) {
  fb
    .auth()
    .signOut()
    .then(() => {
      state.user = null
    })
}


export default new Vuex.Store({
  state,
  getters  : {
    currentUser
  },
  actions  : {
    setCurrentUser,
    signOutCurrentUser
  },
  mutations: {
    setUser,
    signOut
  }
})
