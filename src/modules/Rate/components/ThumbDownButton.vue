<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        TD
    </button>
</template>

<script>
  export default {
    name: 'ThumbDownButton',
    props: ['disabled'],
    methods: {
      handleClick() {
        this.$emit('thumb-click')
      }
    }
  }
</script>

<style scoped>

</style>
