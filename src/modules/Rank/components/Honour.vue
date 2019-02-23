<template>
    <span class="container">
        <span>
            {{honours}}
        </span>
        <honour-icon/>
    </span>
</template>

<script>
  import HonourIcon from '../../../components/icons/Honour'

  export default {
    components: { HonourIcon },
    props     : ['honours'],
    name      : 'Honour'
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
