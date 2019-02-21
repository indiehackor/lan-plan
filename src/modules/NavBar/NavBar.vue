<template>
    <div id="nav-bar">
        <span class="email">
            {{email}}
        </span>
        <confirm-users-list v-if="admin"/>
        <div>
            <give-ratings v-if="admin"/>
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
  import ConfirmUsersList         from './components/ConfirmUsersList'
  import GiveRatings from './components/GiveRatings'

  export default {
    name      : 'NavBar',
    components: { ConfirmUsersList, GiveRatings },
    methods   : {
      ...mapActions([
        'signOutCurrentUser'
      ]),
      signIn() {
        this.$router.push('/login')
      }
    },
    computed  : mapState({
      email: state => state.user ? state.user.email : '',
      admin: state => state.user ? state.user.admin : false
    }),
  }
</script>

<style lang="sass" scoped>
    #nav-bar
        height: 70px
        position: absolute
        display: flex
        justify-content: space-between
        align-items: center
        padding: 0 20px
        top: 0
        left: 0
        right: 0
        font-size: 18px

        button
            height: 40px
            width: 150px
            border-radius: 5px
            transition: 200ms
            font-size: 16px
            background: transparent
            outline: none
            color: white
            border: 1px solid white
            margin-right: 10px

            &:hover
                color: lightslategrey
                background: white
</style>
