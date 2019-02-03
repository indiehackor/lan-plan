<template>
    <div class="rank-item">
        <span class="username">{{user.name}}</span>
        <star :stars="user.stars"/>
    </div>
</template>

<script>
  import Star from './Star'

  export default {
    props: ['user'],
    components: { Star },
    name      : 'RankItem'
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
