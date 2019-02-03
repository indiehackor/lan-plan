<template>
    <div>
        <h2>Rankings</h2>
        <div class="list-container">
            <rank-item v-for="user in users" :key="user.displayName" :user="user"/>
        </div>
    </div>
</template>

<script>
  import RankItem from './components/RankItem'

  export default {
    components: { RankItem },
    data() {
      return {
        users: [
          { displayName: 'CrzyDck', stars: 3 },
          { displayName: '9do', stars: 1 },
          { displayName: 'cmdkeen', stars: 5 },
          { displayName: 'Lubricator', stars: 4 }
        ]
      }
    },
    name      : 'Rank'
  }
</script>

<style scoped lang="sass">
.list-container
    width: 500px
    margin: 10px auto
</style>
