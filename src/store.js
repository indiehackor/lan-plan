import Vuex       from 'vuex'
import Vue        from 'vue'
import { fb, db } from './main'

Vue.use(Vuex)

// GETTERS
export const currentUser = state => state.user

// ACTIONS
export const setCurrentUser     = ({ commit }, user) => commit('setUser', { user })
export const signOutCurrentUser = ({ commit }) => commit('signOut')
export const giveStar           = ({ commit }, uid) => commit('addStar', { uid })

// MUTATIONS
export function setUser(state, { user }) {
  state.user = user
}

export function signOut(state) {
  fb
    .auth()
    .signOut()
    .then(() => {
      state.user = null
    })
}

function addStar(state, { uid }) {
  return db.collection('users')
    .doc(uid)
    .collection('stars')
    .add({ comment: 'Veldig bra fyr!' })
}

const state = {
  user: null
}

export default new Vuex.Store({
  state,
  getters  : {
    currentUser
  },
  actions  : {
    setCurrentUser,
    signOutCurrentUser,
    giveStar
  },
  mutations: {
    setUser,
    signOut,
    addStar
  }
})
