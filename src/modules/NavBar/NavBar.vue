<template>
    <div id="nav-bar">
        <section class="email">
            {{email}}
            <section class="info">
                <h2>har igjen</h2>
                <span><star/> {{stars}}</span>
                <span><honour/> {{honours}}</span>
                <span><thumb/> {{thumbsDown}}</span>
            </section>
        </section>
        <confirm-users-list v-if="admin"/>
        <div>
            <give-ratings v-if="admin"/>
            <button v-if="email" @click="signOutCurrentUser">
                Logg ut
            </button>
        </div>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import ConfirmUsersList         from './components/ConfirmUsersList'
  import GiveRatings from './components/GiveRatings'
  import Honour from '../../components/icons/Honour'
  import Star from '../../components/icons/Star'
  import Thumb from '../../components/icons/ThumbDown'

  export default {
    name      : 'NavBar',
    components: { ConfirmUsersList, GiveRatings, Star, Honour, Thumb},
    methods   : {
      ...mapActions([
        'signOutCurrentUser'
      ]),
    },
    computed  : mapState({
      email: state => state.user ? state.user.email : '',
      admin: state => state.user ? state.user.admin : false,
      stars: state => state.user ? state.user.stars : 0,
      honours: state => state.user ? state.user.honours : 0,
      thumbsDown: state => state.user ? state.user.thumbsDown : 0,
    })
  }
</script>

<style lang="sass" scoped>
    svg
        margin-right: 10px
    .email
        position: relative
        .info
            position: absolute
            width: 100%
            left: 0
            top: 100%
            display: flex
            flex-direction: column
            align-items: flex-start
            height: 0
            overflow: hidden
            transition: 500ms
            span
                height: 30px
                display: flex
        &:hover
            .info
                height: 300px
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
            border-radius: 2px
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
