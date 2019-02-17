<template>
    <button @click="handleClick" class="rate-button">
        H
    </button>
</template>

<script>
  export default {
    name: 'HonorButton',
    methods: {
      handleClick() {
        this.$emit('honour-click')
      }
    }
  }
</script>

<style lang="sass">
</style>
