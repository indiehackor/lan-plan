<template>
    <button @click="handleClick">Gi mer snacks</button>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'GiveRatings',
    methods: {
      ...mapActions(['renewRatingCount']),
      handleClick() {
        this.renewRatingCount()
      }
    }
  }
</script>

<style scoped>

</style>
