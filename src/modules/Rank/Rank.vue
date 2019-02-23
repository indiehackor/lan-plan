<template>
    <div>
        <section class="sort">
            <h2>Sorter:</h2>
            <button @click="sortByStar">S</button>
            <button @click="sortByHonour">H</button>
            <button @click="sortByThumbsDown">TD</button>
        </section>
        <div class="list-container">
            <rank-item v-for="user in sortedUsers" :key="user.uid" :user="user"/>
        </div>
    </div>
</template>

<script>
  import RankItem     from './components/RankItem'
  import { mapState } from 'vuex'

  export default {
    components: { RankItem },
    name      : 'Rank',
    data() {
      return {
        sortCriteria: 'stars'
      }
    },
    methods   : {
      sortByStar() {
        this.sortCriteria = 'stars'
      },
      sortByHonour() {
        this.sortCriteria = 'honours'
      },
      sortByThumbsDown() {
        this.sortCriteria = 'thumbsDown'
      }
    },
    computed  : {
      ...mapState(['users']),
      sortedUsers() {
        return this.users.slice().sort((user1, user2) => {
          return user2[this.sortCriteria] - user1[this.sortCriteria]
        })
      }
    }
  }
</script>

<style scoped lang="sass">
    .list-container
        width: 600px
        margin: 10px auto

    .sort
        display: flex
        justify-content: center

        > *
            margin: 5px

</style>
