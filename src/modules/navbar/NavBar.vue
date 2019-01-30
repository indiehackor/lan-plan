<template>
    <div id="nav-bar">
        <span>
            {{email}}
        </span>
        <div>
            <button v-if="email" @click="signOutCurrentUser">
                Sign out
            </button>
            <button v-else @click="signIn">
                Sign in
            </button>
        </div>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name    : 'NavBar',
    methods : {
      ...mapActions([
        'signOutCurrentUser'
      ]),
      signIn() {
        this.$router.push('/login')
      }
    },
    computed: mapState({
      email: state => state.user ? state.user.email : ""
    })
  }
</script>

<style lang="sass" scoped>
    #nav-bar
        height: 70px
        background: lightslategrey
        position: absolute
        display: flex
        justify-content: space-between
        top: 0
        left: 0
        right: 0
</style>
