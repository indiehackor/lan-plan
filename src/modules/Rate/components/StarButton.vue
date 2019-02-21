<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        S
    </button>
</template>

<script>
  export default {
    name: 'StarButton',
    props: ['disabled'],
    methods: {
      handleClick() {
        this.$emit('star-click')
      }
    }
  }
</script>

<style scoped>

</style>
