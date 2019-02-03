<template>
    <div class="tab-container">
        <button @click="rate">
            RATE
        </button>
        <button @click="rank">
            RANKING
        </button>
    </div>
</template>

<script>
  export default {
    name: 'Tabs',
    methods: {
      rate() {
        this.$router.push('/rate')
      },
      rank() {
        this.$router.push('/rank')
      }
    }
  }
</script>

<style scoped>

</style>
