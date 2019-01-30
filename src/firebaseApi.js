import { fb } from './main'

/**
 * Log in to firebase with email and password
 * @param email
 * @param password
 */
export function login(email, password) {
  fb.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL)
    .then(function () {
      fb.auth().signInWithEmailAndPassword(email, password).then(function () {
        //nothing
      }).catch(function (error) {
        alert(error)
      })
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
  fb.auth().sendPasswordResetEmail(email).then(function () {
    // dispatch email sent action
  }).catch(function (error) {
    alert(error)
    // dispatch error action.
  })
}


export function registerNewUser(email, password) {
  fb.auth().createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // dispatch error action
      alert(error)
    })

}
