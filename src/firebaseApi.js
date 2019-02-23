import { fb, db } from './main'
import store      from './store'

export function populateUsersArray() {
  db.collection('users').get().then(data => {
    data.docs.forEach(user => {
      const userPromises = []
      userPromises.push(user.ref.collection('stars').get())
      userPromises.push(user.ref.collection('honours').get())
      userPromises.push(user.ref.collection('thumbsDown').get())

      Promise.all(userPromises).then(snapshots => {
        const arrUser = {
          ...user.data(),
          stars: snapshots[0].docs.length,
          honours: snapshots[1].docs.length,
          thumbsDown: snapshots[2].docs.length,
        }
        store.commit('addUserToArray', arrUser)
      })
    })
  })
}

export function listenForRateUpdates(uid) {
  setListener(uid, 'stars')
  setListener(uid, 'honours')
  setListener(uid, 'thumbsDown')
}

function setListener(uid, type) {
  db.collection("users").doc(uid).collection(type).onSnapshot(result => {
    store.commit('updateRating', {
      [type]: result.size,
      uid
    })
  })
}

/**
 * Log in to firebase with email and password
 * @param email
 * @param password
 */
export function login(email, password) {
  fb.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL)
    .then(function () {
      return fb.auth().signInWithEmailAndPassword(email, password)
    })
    .catch(function (error) {
      alert(error)
    })
}

/**
 * Send email to user to reset password.
 * @param email
 */
export function sendResetEmail(email) {
  fb.auth().sendPasswordResetEmail(email)
    .then(function () {
      // dispatch email sent action
    }).catch(function (error) {
    alert(error)
    // dispatch error action.
  })
}

export function addNewUserInDatabase({ uid, username, email }) {
  return db.collection('users').doc(uid).set({
    username,
    email,
    uid,
    confirmed: false
  })
}

export function registerNewUser(email, password, username) {
  fb.auth().createUserWithEmailAndPassword(email, password)
    .then(function ({ user: { uid } }) {
      return addNewUserInDatabase({ uid, email, username })
    })
    .catch(function (error) {
      // dispatch error action
      alert(error)
    })

}

export function confirmUser(uid) {
  return db.collection('users').doc(uid).set({ confirmed: true }, { merge: true })
}

export function giveMoreRatings() {
  return db.collection('users').get().then((col) => {
    col.forEach(doc => {
      return db.collection('users')
        .doc(doc.data().uid)
        .set({
          stars     : 10,
          thumbsDown: 5,
          honours   : 5
        }, { merge: true })
    })
  })
}

export function addRating(type, uidGive, payload) {
  db.collection('users')
    .doc(payload.uid)
    .collection(type)
    .add({ comment: payload.comment, author: payload.author })
    .then(() => {
      return getUserData(type, uidGive)
    })
    .then((doc) => {
      const newBalance = doc.data()[type] - 1
      if (newBalance < 0) {
        console.log(`${doc.data().username} is all out of ${type}`)
        // TODO Legg til action som vise feilmelding
        return
      }
      console.log(`Setting ${type} to ${newBalance} for ${doc.data().username}`)
      // TODO Legg til action som viser info melding om hvor mange stjerner du har igjen
      return setRatingBalance(type, uidGive, newBalance)
    })
    .catch(err => {
      alert(err)
    })
}

export function setRatingBalance(type, uid, newBalance) {
  return db.collection('users')
    .doc(uid)
    .set({ [type]: newBalance }, { merge: true })
}

function getUserData(type, uid) {
  return db.collection('users')
    .doc(uid).get()
}
