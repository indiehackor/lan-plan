<template>
    <span>
        stjerne {{stars}}
    </span>
</template>

<script>
  export default {
    props: ['stars'],
    name: 'Star'
  }
</script>

<style scoped lang="sass">
    span
        border: 1px solid black
        border-radius: 2px
        padding: 5px
</style>
