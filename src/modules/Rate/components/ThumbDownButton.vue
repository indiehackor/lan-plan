<template>
    <button @click="handleClick" class="rate-button">
        TD
    </button>
</template>

<script>
  export default {
    name: 'ThumbDownButton',
    methods: {
      handleClick() {
        this.$emit('thumb-click')
      }
    }
  }
</script>

<style scoped>

</style>
