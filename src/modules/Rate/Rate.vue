<template>
    <div class="list-container">
        <rate-item v-for="user in confirmedUsers" :key="user.uid" :user="user"/>
    </div>
</template>

<script>
  import RateItem     from './components/RateItem'
  import { mapState } from 'vuex'

  export default {
    name      : 'Rate',
    components: { RateItem },
    computed: {
      ...mapState(['users']),
      confirmedUsers() {
        return this.users.filter(user => user.confirmed)
      }
    }
  }
</script>

<style scoped lang="sass">
    .list-container
        width: 500px
        margin: 10px auto
</style>
