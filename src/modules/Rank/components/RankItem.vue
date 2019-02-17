<template>
    <div class="rank-item">
        <span class="username">{{user.username}}</span>
        <star :stars="stars.length"/>
    </div>
</template>

<script>
  import Star   from './Star'
  import { db } from '../../../main'

  export default {
    props     : ['user'],
    components: { Star },
    name      : 'RankItem',
    data() {
      return {
        stars: []
      }
    },
    firestore() {
      return {
        stars: db.collection('users')
          .doc(this.user.uid)
          .collection('stars')
      }
    }
  }
</script>

<style scoped lang="sass">
    .rank-item
        display: flex
        justify-content: space-between
        margin-bottom: 10px

    .username
        padding: 5px
</style>
