<template>
    <div id="nav-bar">
        <section class="email">
            {{user.email}}
            <section class="info">
                <h2>har igjen</h2>
                <span><star/> {{liveUser.stars}}</span>
                <span><honour/> {{liveUser.honours}}</span>
                <span><thumb/> {{liveUser.thumbsDown}}</span>
            </section>
        </section>
        <confirm-users-list v-if="user.admin"/>
        <div>
            <give-ratings v-if="user.admin"/>
            <button @click="signOutCurrentUser">
                Logg ut
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import ConfirmUsersList from "./components/ConfirmUsersList";
import GiveRatings from "./components/GiveRatings";
import Honour from "../../components/icons/Honour";
import Star from "../../components/icons/Star";
import Thumb from "../../components/icons/ThumbDown";
import { db } from "../../main";

export default {
  name: "NavBar",
  components: { ConfirmUsersList, GiveRatings, Star, Honour, Thumb },
  props: ["user"],
  data() {
    return {
      liveUser: {
        stars: 0,
        honours: 0,
        thumbsDown: 0
      },
      stars: 0,
      honours: 0,
      thumbsDown: 0
    }
  },
  methods: {
    ...mapActions(["signOutCurrentUser"])
  },
  firestore() {
    return {
      liveUser: db.collection("users").doc(this.user.uid)
    };
  }
};
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
