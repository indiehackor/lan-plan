<template>
    <div class="rank-item">
        <span class="username">{{user.username}}</span>
        <star :stars="user.stars"/>
        <thumb-down :thumbs-down="user.thumbsDown"/>
        <honour :honors="user.honours"/>
    </div>
</template>

<script>
  import Star      from './Star'
  import ThumbDown from './ThumbDown'
  import Honour     from './Honour'

  export default {
    props     : ['user'],
    components: { Star, Honour, ThumbDown },
    name      : 'RankItem',
  }
</script>

<style scoped lang="sass">
    .rank-item
        display: flex
        justify-content: space-between
        margin-bottom: 10px
        > *
            margin-right: 10px
            min-width: 110px

        .username
            padding: 5px
            text-align: left
            flex: 1
</style>
