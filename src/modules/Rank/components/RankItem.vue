<template>
    <div class="rank-item">
        <span class="username" :class="{me: user.username === me.username}">{{user.username}}</span>
        <star :stars="user.stars"/>
        <thumb-down :thumbs-down="user.thumbsDown"/>
        <honour :honors="user.honours"/>
    </div>
</template>

<script>
  import Star         from './Star'
  import ThumbDown    from './ThumbDown'
  import Honour       from './Honour'
  import { mapState } from 'vuex'

  export default {
    props     : ['user'],
    components: { Star, Honour, ThumbDown },
    name      : 'RankItem',
    computed: {
      ...mapState({me: state => state.user})
    }
  }
</script>

<style scoped lang="sass">
    .rank-item
        display: flex
        justify-content: space-between
        align-items: center
        margin-bottom: 10px
        > *
            margin-right: 20px
            min-width: 50px
            height: 30px
        .me
            font-weight: 700

        .username
            font-size: 18px
            padding: 5px
            text-align: left
            flex: 1
</style>
