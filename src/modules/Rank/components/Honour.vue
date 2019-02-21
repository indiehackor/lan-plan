<template>
    <span>
        honor {{honors}}
    </span>
</template>

<script>
  export default {
    props: ['honors'],
    name: 'Honour'
  }
</script>

<style scoped lang="sass">
    span
        border: 1px solid white
        border-radius: 2px
        padding: 5px
</style>
