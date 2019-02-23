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

export const giveStar   = ({ commit }, payload) => commit('addStar', payload)
export const giveHonour = ({ commit }, payload) => commit('addHonour', payload)
export const giveThumb  = ({ commit }, payload) => commit('addThumb', payload)

export const renewRatingCount = ({ commit }) => commit('addRatings')

export const startLoading = ({ commit }) => commit('setLoading', true)
export const stopLoading  = ({ commit }) => commit('setLoading', false)

export const showModal = ({ commit }, { username, uid, type }) => commit('openModal', { username, uid, type })
export const hideModal = ({ commit }) => commit('closeModal')


// TODO Move all firebase stuff to firebaseApi
// MUTATIONS
export function setUser(state, { user }) {
  db.collection('users').doc(user.uid).get().then((user) => {
    if (user.exists && user.data().confirmed) {
      state.user = { ...user, ...user.data() }
    } else {
      state.user = null
    }
  })
}

export function addUserToArray(state, user) {
  this.state.users.push(user)
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

function addStar(state, payload) {
  api.addRating('stars', state.user.uid, {...payload, author: state.user.username})
}

function addHonour(state, payload) {
  api.addRating('honours', state.user.uid, {...payload, author: state.user.username})
}

function addThumb(state, payload) {
  api.addRating('thumbsDown', state.user.uid, {...payload, author: state.user.username})
}

function addRatings() {
  api.giveMoreRatings()
}

function updateRating(state, payload) {
  const index = state.users.findIndex(user => user.uid === payload.uid)
  const updatedUser = {...state.users[index], ...payload}
  state.users = [
    ...state.users.filter(user => user.uid !== payload.uid),
    updatedUser
  ]
}

function setLoading(state, payload) {
  state.loading = true
  setTimeout(() => state.loading = payload, 1000)
}

function openModal(state, { username, uid, type }) {
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
  user       : null,
  loading    : true,
  modals     : {
    confirmModal: {
      open: false
    }
  },
  users: [],
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
    addRatings,
    addUserToArray,
    updateRating
  }
})

export default store
