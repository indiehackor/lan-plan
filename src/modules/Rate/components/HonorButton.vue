<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        H
    </button>
</template>

<script>
  export default {
    name: 'HonorButton',
    props: ['disabled'],
    methods: {
      handleClick() {
        this.$emit('honour-click')
      }
    }
  }
</script>

<style lang="sass">
</style>
