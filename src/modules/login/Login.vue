<template lang="html">
    <form class="login-container" @submit="letsGo">
        <h1>Login</h1>

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
            for="username"
            class="input-label"
        >Brukernavn</label>
        <input
            id="username"
            type="text"
            class="login-input"
            v-model="username"
            :disabled="!newUser"
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
            id="login-button"
        >Let's go!
        </button>
    </form>
</template>

<script>
  import {
    login,
    sendResetEmail,
    registerNewUser
  }                     from '../../firebaseApi'
  import { mapActions, mapState } from 'vuex'

  export default {
    name   : 'Login',
    data() {
      return {
        email         : '',
        password      : '',
        username      : '',
        forgotPassword: false,
        newUser       : false,
      }
    },
    computed: {
      ...mapState(['user'])
    },
    created() {
      if (this.user) this.$router.push('/rank')
    },
    methods: {
      ...mapActions(['startLoading']),
      letsGo(e) {
        e.preventDefault()
        this.startLoading()
        if (!this.newUser && !this.forgotPassword) {
          login(this.email, this.password)
          this.$router.push('/rank')
        } else if (this.newUser && !this.forgotPassword) {
          registerNewUser(this.email, this.password, this.username)
        } else if (!this.newUser && this.forgotPassword && this.email) {
          sendResetEmail(this.email)
        } else if (this.newUser && this.forgotPassword) {
          alert('Nysgjerrigper!')
        }
      }
    }
  }
</script>

<style scoped lang="sass">
    h1
        text-align: center
        width: 100%
    .login-container
        display: flex
        flex-direction: column
        width: 300px
        margin: 0 auto
        align-items: flex-start

        #login-button
            margin: 10px 0
            width: 100px

        .login-input
            width: 100%

        .input-label
            text-align: left
</style>
