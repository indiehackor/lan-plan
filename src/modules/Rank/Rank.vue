<template>
    <div>
        <h2>Rankings</h2>
        <div class="list-container">
            <rank-item v-for="user in users" :key="user.name" :user="user"/>
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
          { name: 'CrzyDck', stars: 3 },
          { name: '9do', stars: 1 },
          { name: 'cmdkeen', stars: 5 },
          { name: 'Lubricator', stars: 4 }
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
