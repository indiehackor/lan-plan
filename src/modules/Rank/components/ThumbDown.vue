<template>
    <span class="container">
        <span>
            {{thumbsDown}}
        </span>
        <thumb-icon/>
    </span>
</template>

<script>
  import ThumbIcon from '../../../components/icons/ThumbDown'

  export default {
    components: { ThumbIcon },
    props     : ['thumbsDown'],
    name      : 'ThumbDown'
  }
</script>

<style scoped lang="sass">
    .container
        border: 1px solid white
        border-radius: 2px
        padding: 0 20px
        display: flex
        justify-content: space-between
        align-items: center

        svg
            height: 15px
            width: 15px
</style>
