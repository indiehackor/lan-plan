<template>
    <button @click="handleClick" class="rate-button">
        S
    </button>
</template>

<script>
  export default {
    name: 'StarButton',
    methods: {
      handleClick() {
        this.$emit('star-click')
      }
    }
  }
</script>

<style scoped>

</style>
