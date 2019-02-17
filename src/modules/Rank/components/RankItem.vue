<template>
    <div class="rank-item">
        <span class="username">{{user.username}}</span>
        <star :stars="stars.length"/>
        <thumb-down :thumbs-down="thumbsDown.length"/>
        <honour :honors="honours.length"/>
    </div>
</template>

<script>
  import Star      from './Star'
  import ThumbDown from './ThumbDown'
  import Honour     from './Honour'
  import { db }    from '../../../main'

  export default {
    props     : ['user'],
    components: { Star, Honour, ThumbDown },
    name      : 'RankItem',
    data() {
      return {
        stars: [],
        thumbsDown: [],
        honours: []
      }
    },
    firestore() {
      return {
        stars: db.collection('users')
          .doc(this.user.uid)
          .collection('stars'),

        honours: db.collection('users')
          .doc(this.user.uid)
          .collection('honours'),

        thumbsDown: db.collection('users')
          .doc(this.user.uid)
          .collection('thumbsDown')
      }
    }
  }
</script>

<style scoped lang="sass">
    .rank-item
        display: flex
        justify-content: space-between
        margin-bottom: 10px
        > *
            margin-right: 10px

        .username
            padding: 5px
            text-align: left
            flex: 1
</style>
