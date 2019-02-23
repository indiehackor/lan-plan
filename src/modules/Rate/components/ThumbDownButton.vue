<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        <thumb-down/>
    </button>
</template>

<script>
  import ThumbDown from '../../../components/icons/ThumbDown'
  export default {
    name: 'ThumbDownButton',
    components: { ThumbDown },
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
