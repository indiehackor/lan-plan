<template>
    <div id="ratings">
        <h1>Welcome to LanPlan {{ displayName }}!</h1>
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
    computed  : mapState({
      displayName: state => state.user ? state.user.displayName : null
    })
  }

</script>

<style>

</style>
