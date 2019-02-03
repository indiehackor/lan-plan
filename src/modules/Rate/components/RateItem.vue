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
        border: 1px solid black
        border-radius: 2px
        margin-bottom: 10px

        .buttons
            display: flex
            justify-content: space-between
            position: absolute
            width: 100%
            height: 100%
            left: 0
            top: 0
            opacity: 0

            &:hover
                opacity: 1
    .rate-button
        width: 100px
</style>
