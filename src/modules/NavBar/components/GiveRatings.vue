<template>
    <button @click="handleClick">Gi mer snacks</button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'GiveRatings',
    methods: {
      ...mapActions(['giveRatings']),
      handleClick() {
        this.giveRatings()
      }
    }
  }
</script>

<style scoped>

</style>
