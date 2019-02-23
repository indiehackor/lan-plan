<template>
    <div id="ratings">
        <h1>Velkommen til LanPlan{{ ` ${user.username}` }}!</h1>
        <star/>
        <thumb-down/>
        <honour/>
        <tabs/>
        <router-view/>
    </div>
</template>


<script>
  import { mapState } from 'vuex'
  import Tabs         from './components/Tabs'
  import Star         from '../../components/icons/Star'
  import Honour         from '../../components/icons/Honour'
  import ThumbDown    from '../../components/icons/ThumbDown'

  export default {
    name      : 'Ratings',
    components: { ThumbDown, Star, Tabs, Honour },
    computed  : {
      ...mapState(['user', 'users'])
    }
  }

</script>

<style>

</style>
