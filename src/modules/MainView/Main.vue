<template>
    <div id="ratings">
        <h1>Velkommen til LanPlan{{ ` ${user.username}` }}!</h1>
        <tabs/>
        <router-view/>
    </div>
</template>


<script>
  import { mapState } from 'vuex'
  import Tabs         from './components/Tabs'

  export default {
    name      : 'Ratings',
    components: { Tabs },
    computed  : {
      ...mapState(['user', 'users'])
    }
  }

</script>

<style>

</style>
