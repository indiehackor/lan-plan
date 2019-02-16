<template>
    <div id="ratings">
        <h1>Welcome to LanPlan {{ user.displayName }}!</h1>
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
    computed  : {...mapState(['user'])}
  }

</script>

<style>

</style>
