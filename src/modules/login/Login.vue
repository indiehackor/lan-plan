<template lang="html">
    <div id="firebaseui-auth-container"></div>
</template>

<script>
  import firebaseui from 'firebaseui'
  import firebase   from 'firebase'

  export default {
    name: 'Login',
    mounted() {
      const firebaseUIConfig = {
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', firebaseUIConfig)
    },
  }
</script>

<style scoped lang="sass">
    @import "~firebaseui/dist/firebaseui.css"
</style>
