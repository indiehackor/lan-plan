import Vuex       from 'vuex'
import Vue        from 'vue'
import { fb, db } from './main'
import * as api   from './firebaseApi'

Vue.use(Vuex)

// GETTERS
export const currentUser = state => state.user

// ACTIONS
export const setCurrentUser     = ({ commit }, user) => commit('setUser', { user })
export const confirmUser        = ({ commit }, uid) => commit('setUserConfirmed', { uid })
export const signOutCurrentUser = ({ commit }) => commit('signOut')

export const giveStar    = ({ commit }, uid) => commit('addStar', { uid })
export const giveHonour  = ({ commit }, uid) => commit('addHonour', { uid })
export const giveThumb   = ({ commit }, uid) => commit('addThumb', { uid })
export const giveRatings = ({ commit }) => commit('addRatings')

export const startLoading = ({ commit }) => commit('setLoading', true)
export const stopLoading  = ({ commit }) => commit('setLoading', false)


// TODO Move all firebase stuff to firebaseApi
// MUTATIONS
export function setUser(state, { user }) {
  db.collection('users').doc(user.uid).get().then((doc) => {
    if (doc.exists) {
      state.user = { ...user, ...doc.data() }
    }
  })
}

function setUserConfirmed(state, { uid }) {
  api.confirmUser(uid)
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
  api.addRating('stars', state.user.uid, uid)
}

function addHonour(state, { uid }) {
  api.addRating('honours', state.user.uid, uid)
}

function addThumb(state, { uid }) {
  api.addRating('thumbsDown', state.user.uid, uid)
}

function addRatings() {
  api.giveMoreRatings()
}

function setLoading(state, payload) {
  state.loading = true
  setTimeout(() => state.loading = payload, 1000)
}

const state = {
  user   : null,
  loading: true
}

let store = new Vuex.Store({
  state,
  getters  : {
    currentUser
  },
  actions  : {
    setCurrentUser,
    signOutCurrentUser,
    confirmUser,
    giveStar,
    giveHonour,
    giveThumb,
    startLoading,
    stopLoading,
    giveRatings
  },
  mutations: {
    setUser,
    signOut,
    addStar,
    addHonour,
    addThumb,
    setLoading,
    setUserConfirmed,
    addRatings
  }
})

export default store
