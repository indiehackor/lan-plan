<template>
    <div class="list-container">
        <rate-item v-for="user in users" :key="user.uid" :user="user"/>
    </div>
</template>

<script>
  import RateItem     from './components/RateItem'
  import { mapState } from 'vuex'

  export default {
    name      : 'Rate',
    components: { RateItem },
    computed: {
      ...mapState(['users'])
    }
  }
</script>

<style scoped lang="sass">
    .list-container
        width: 500px
        margin: 10px auto
</style>
