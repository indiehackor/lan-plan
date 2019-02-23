<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        <star/>
    </button>
</template>

<script>
  import Star from '../../../components/icons/Star'
  export default {
    name: 'StarButton',
    components: { Star },
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
