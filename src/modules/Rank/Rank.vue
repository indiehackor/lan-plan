<template>
    <div>
        <h2>Rankings</h2>
        <div class="list-container">
            <rank-item v-for="user in users" :key="user.username" :user="user"/>
        </div>
    </div>
</template>

<script>
  import RankItem     from './components/RankItem'
  import { mapState } from 'vuex'

  export default {
    components: { RankItem },
    name      : 'Rank',
    computed: {
      ...mapState(['users'])
    }
  }
</script>

<style scoped lang="sass">
.list-container
    width: 600px
    margin: 10px auto
</style>
