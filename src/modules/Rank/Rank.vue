<template>
    <div>
        <h2>Rankings</h2>
        <div class="list-container">
            <rank-item v-for="user in users" :key="user.uid" :user="user"/>
        </div>
    </div>
</template>

<script>
  import RankItem from './components/RankItem'
  import {db}     from '../../main'

  export default {
    components: { RankItem },
    name      : 'Rank',
    data() {
      return {
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
