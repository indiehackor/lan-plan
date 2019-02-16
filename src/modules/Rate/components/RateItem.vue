<template>
    <div class="rate-item">
        <span>{{user.displayName}}</span>
        <div class="buttons">
            <star-button/>
            <honor-button/>
            <thumb-down-button/>
        </div>
    </div>
</template>

<script>
  import HonorButton     from './HonorButton'
  import StarButton      from './StarButton'
  import ThumbDownButton from './ThumbDownButton'

  export default {
    components: { HonorButton, StarButton, ThumbDownButton },
    props     : ['user'],
    name      : 'RateItem'
  }
</script>

<style scoped lang="sass">
    .rate-item
        position: relative
        display: flex
        justify-content: center
        align-items: center
        font-size: 18px
        border: 1px solid black
        border-radius: 2px
        margin-bottom: 10px
        height: 60px

        .buttons
            background: white
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
        background: lightskyblue
        border-radius: 20px
        margin: 5px

</style>
