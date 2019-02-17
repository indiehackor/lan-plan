<template>
    <div id="ratings">
        <h1>Welcome to LanPlan{{ ` ${userdata.username}` }}!</h1>
        <tabs/>
        <router-view/>
    </div>
</template>


<script>
  import { mapState } from 'vuex'
  import Tabs         from './components/Tabs'
  import { db }       from '../../main'

  export default {
    name      : 'Ratings',
    components: { Tabs },
    data() {
      return {
        userdata: { username: '' }
      }
    },
    computed  : {
      ...mapState(['user'])
    },
    firestore() {
      return {
        userdata: db.collection('users').doc(this.user.uid)
      }
    }
  }

</script>

<style>

</style>
