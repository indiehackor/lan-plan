<template lang="html">
    <div class="login-container">
        <label
            for="email"
            class="input-label"
        >E-post</label>
        <input
            id="email"
            type="email"
            class="login-input"
            v-model="email"
        >
        <label
            for="password"
            class="input-label"
        >Passord</label>
        <input
            id="password"
            type="password"
            class="login-input"
            v-model="password"
        >
        <span>
            <input
                id="forgotten-password"
                type="checkbox"
                v-model="forgotPassword"
            >
            <label for="forgotten-password">
                Glemt passord
            </label>
        </span>
        <span>
            <input
                type="checkbox"
                id="new-user"
                v-model="newUser"
            >
            <label for="new-user">
                Ny bruker
            </label>
        </span>
        <button
            @click="letsGo"
            id="login-button"
        >Let's go!
        </button>
    </div>
</template>

<script>
  import {
    login,
    sendResetEmail,
    registerNewUser
  } from '../../firebaseApi'

  export default {
    name   : 'Login',
    data() {
      return {
        email         : '',
        password      : '',
        forgotPassword: false,
        newUser       : false
      }
    },
    methods: {
      letsGo () {
        if (!this.newUser && !this.forgotPassword) {
          login(this.email, this.password)
        } else if (this.newUser && !this.forgotPassword) {
          registerNewUser(this.email, this.password)
        } else if (!this.newUser && this.forgotPassword && this.email) {
          sendResetEmail(this.email)
        } else if (this.newUser && this.forgotPassword) {
          alert("Nysgjerrigper!")
        }
      }
    },
  }
</script>

<style scoped lang="sass">
    .login-container
        display: flex
        flex-direction: column
        width: 300px
        margin: 50px auto
        align-items: flex-start

        #login-button
            margin: 10px 0
            width: 100px

        .login-input
            width: 100%

        .input-label
            text-align: left

</style>
