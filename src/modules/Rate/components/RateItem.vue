<template>
    <div class="rate-item">
        <span>{{user.username}}</span>
        <div class="buttons">
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
  import HonorButton     from './HonorButton'
  import StarButton      from './StarButton'
  import ThumbDownButton from './ThumbDownButton'
  import { mapActions }  from 'vuex'

  export default {
    components: { HonorButton, StarButton, ThumbDownButton },
    props     : ['user'],
    name      : 'RateItem',
    methods   : {
      ...mapActions([
        'giveStar',
        'giveThumb',
        'giveHonour'
      ]),
      handleStarClick() {
        this.giveStar(this.user.uid)
      },
      handleThumbClick() {
        this.giveThumb(this.user.uid)
      },
      handleHonourClick() {
        this.giveHonour(this.user.uid)
      }
    }
  }
</script>

<style scoped lang="sass">
    .rate-item
        position: relative
        display: flex
        justify-content: center
        align-items: center
        font-size: 18px
        border: 1px solid white
        border-radius: 2px
        margin-bottom: 10px
        height: 60px
        transition: color 300ms
        &:hover
            color: transparent

        .buttons
            //background: white
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
            width: 40px
            height: 40px
            background: transparent
            border-radius: 20px
            color: white
            border: 1px solid white
            margin: 5px
            outline: none
            &:focus
                animation: button-background 300ms ease-out

    @keyframes button-background
        0%
            background: white
        100%
            background: transparent


</style>
