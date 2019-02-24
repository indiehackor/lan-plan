<template>
    <div>
        <section class="sort">
            <h2>Sorter:</h2>
            <button @click="sortByStar">
                <star/>
            </button>
            <button @click="sortByHonour">
                <honour/>
            </button>
            <button @click="sortByThumbsDown">
                <thumb-down/>
            </button>
        </section>
        <div class="list-container">
            <rank-item v-for="user in sortedUsers" :key="user.uid" :user="user"/>
        </div>
    </div>
</template>

<script>
  import RankItem     from './components/RankItem'
  import { mapState } from 'vuex'
  import Star         from '../../components/icons/Star'
  import Honour       from '../../components/icons/Honour'
  import ThumbDown    from '../../components/icons/ThumbDown'

  export default {
    components: { ThumbDown, Honour, Star, RankItem },
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
    button
        height: 60px
        width: 60px
        border-radius: 30px
        padding: 0
        color: white
        background: transparent
        border: none
        transition: 200ms
        &:hover
            color: lightslategrey
            background: white
        &:focus
            outline: none
    .list-container
        width: 600px
        margin: 10px auto

    .sort
        display: flex
        justify-content: center
        align-items: center

        > *
            margin: 5px
    svg
        height: 30px
        width: 30px

    @media (max-width: 700px)
        .list-container
            width: 100%
</style>
