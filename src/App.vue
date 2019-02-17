<template>
    <div id="app">
        <nav-bar/>
        <p v-if="loading">Loading..</p>
        <router-view v-else/>
    </div>
</template>


<script>
  import NavBar         from './modules/NavBar/NavBar'
  import { fb, db }     from './main'
  import { mapActions, mapState } from 'vuex'


  export default {
    name      : 'app',
    components: { NavBar },
    data() {
      return {
        users: []
      }
    },
    firestore() {
      return {
        users: db.collection('users')
      }
    },
    beforeCreate() {
      fb.auth().onAuthStateChanged(user => {
        this.checkUser(user)
      })
    },
    methods   : {
      ...mapActions([
        'setCurrentUser',
        'stopLoading',
      ]),
      checkUser(user) {
        if (user) {
          this.setCurrentUser(user)
        } else {
          this.$router.push('/login')
        }
        this.stopLoading()
      }
    },
    computed: {
      ...mapState(['loading'])
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
