<template>
    <div id="app">
        <nav-bar/>
        <p v-if="isLoading">Loading..</p>
        <router-view v-else/>
    </div>
</template>


<script>
  import NavBar         from './modules/navbar/NavBar'
  import { fb }         from './main'
  import { mapActions } from 'vuex'

  const loadingDelay = 2000

  export default {
    name      : 'app',
    components: { NavBar },
    data() {
      return {
        isLoading: true,
      }
    },
    methods   : {
      ...mapActions([
        'setCurrentUser'
      ]),
      setNotLoadingWithDelay() {
        setTimeout(() => this.isLoading = false, loadingDelay)
      },
      checkUser(user) {
        if (user) {
          this.setCurrentUser(user)
          this.$router.push('/')
        } else {
          this.$router.push('/login')
          this.isLoading = false
        }
      }
    },
    beforeCreate() {
      fb.auth().onAuthStateChanged(user => {
        this.checkUser(user)
        this.setNotLoadingWithDelay()
      })
    }
  }
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2C3E50;
        margin-top: 70px;
        padding: 40px;
    }
</style>
