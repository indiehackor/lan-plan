<template>
    <div class="list-container">
        <rate-item v-for="user in users" :key="user.displayName" :user="user"/>
    </div>
</template>

<script>
  import RateItem from './components/RateItem'

  export default {
    name      : 'Rate',
    components: { RateItem },
    data() {
      return {
        test : 'lol',
        users: [
          { displayName: 'CrzyDck', stars: 3 },
          { displayName: '9do', stars: 1 },
          { displayName: 'cmdkeen', stars: 5 },
          { displayName: 'Lubricator', stars: 4 }
        ]
      }
    }
  }
</script>

<style scoped lang="sass">
    .list-container
        width: 500px
        margin: 10px auto
</style>
