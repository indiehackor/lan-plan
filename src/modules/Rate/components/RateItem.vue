<template>
    <div class="rate-item" :class="{me: user.uid === loggedInUid}">
        <span>{{user.username}}</span>
        <div v-if="user.uid !== loggedInUid" class="buttons">
            <star-button
                @star-click="handleStarClick"
            />
            <honor-button
                @honour-click="handleHonourClick"
            />
            <thumb-down-button
                @thumb-click="handleThumbClick"
            />
        </div>
    </div>
</template>

<script>
import HonorButton              from "./HonorButton";
import StarButton               from "./StarButton";
import ThumbDownButton          from "./ThumbDownButton";
import { mapActions, mapState } from 'vuex'

export default {
  components: { HonorButton, StarButton, ThumbDownButton },
  props: ["user"],
  name: "RateItem",
  computed: {
    ...mapState({
      loggedInUid: state => state.user.uid,
    })
  },
  methods: {
    ...mapActions(["showModal"]),
    handleThumbClick() {
      this.openModal("thumbDown");
    },
    handleHonourClick() {
      this.openModal("honour");
    },
    handleStarClick() {
      this.openModal("star");
    },
    openModal(type) {
      this.showModal({
        username: this.user.username,
        uid: this.user.uid,
        type: type
      });
    }
  }
};
</script>

<style scoped lang="sass">
    .rate-item
        position: relative
        display: flex
        justify-content: center
        align-items: center
        font-size: 20px
        border: 1px solid white
        border-radius: 2px
        margin-bottom: 10px
        height: 80px
        transition: color 300ms
        &.me
            &:hover
                color: white
                text-underline: white
        &:hover
            color: transparent

        .buttons
            display: flex
            justify-content: center
            align-items: center
            position: absolute
            width: 100%
            height: 100%
            left: 0
            top: 0
            opacity: 0
            transition: opacity 300ms

            &:hover
                opacity: 1

        .rate-button
            width: 50px
            height: 50px
            border-radius: 25px
            background: transparent
            color: white
            border: 1px solid white
            padding: 0
            margin: 5px
            outline: none
            &:focus
                animation: button-background 300ms ease-out

    @keyframes button-background
        0%
            background: white
        100%
            background: transparent

    @media (max-width: 700px)
        .rate-item
            padding: 0 20px
            justify-content: space-between
            .buttons
                position: relative
                opacity: 1
                width: unset


</style>
