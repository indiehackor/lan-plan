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

export const renewRatingCount = ({ commit }) => commit('addRatings')

export const startLoading = ({ commit }) => commit('setLoading', true)
export const stopLoading  = ({ commit }) => commit('setLoading', false)

export const showModal = ({commit}, {username, uid, type}) => commit('openModal', {username, uid, type})
export const hideModal = ({commit}) => commit('closeModal')


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

function openModal(state, {username, uid, type}) {
  state.modals.confirmModal = {
    open: true,
    username,
    type,
    uid
  }
}

function closeModal(state) {
  state.modals.confirmModal = {
    open: false
  }
}

const state = {
  user   : null,
  loading: true,
  modals: {
    confirmModal: {
      open: false,

    },
  },
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
    showModal,
    hideModal,
    giveStar,
    giveHonour,
    giveThumb,
    startLoading,
    stopLoading,
    renewRatingCount
  },
  mutations: {
    closeModal,
    openModal,
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
