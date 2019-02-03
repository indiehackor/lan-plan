<template>
    <span>
        tommel ned {{thumbsDown}}
    </span>
</template>

<script>
  export default {
    props: ['thumbsDown'],
    name: 'ThumbDown'
  }
</script>

<style scoped lang="sass">
    span
        border: 1px solid black
        border-radius: 2px
        padding: 5px
</style>
