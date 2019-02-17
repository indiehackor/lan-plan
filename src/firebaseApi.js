import { fb, db } from './main'

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
