<template>
    <div class="list-container">
        <rate-item v-for="user in users" :key="user.uid" :user="user"/>
    </div>
</template>

<script>
  import RateItem from './components/RateItem'
  import {db}     from '../../main'

  export default {
    name      : 'Rate',
    components: { RateItem },
    data() {
      return {
        test : 'lol',
        users: []
      }
    },
    firestore() {
      return {
        users: db.collection('users')
      }
    }
  }
</script>

<style scoped lang="sass">
    .list-container
        width: 500px
        margin: 10px auto
</style>
