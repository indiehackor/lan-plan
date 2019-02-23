<template>
    <button :disabled="disabled" @click="handleClick" class="rate-button">
        <honour/>
    </button>
</template>

<script>
  import Honour from '../../../components/icons/Honour'
  export default {
    name: 'HonorButton',
    components: { Honour },
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
