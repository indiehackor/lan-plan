<template>
    <div class="list">
        <confirm-item
            v-for="unconfirmedUser in unconfirmedUsers"
            :user="unconfirmedUser"
            :key="unconfirmedUser.username"
        />
    </div>
</template>

<script>
  import ConfirmItem from './ConfirmItem'
  import { db }      from '../../../main'

  export default {
    components: { ConfirmItem },
    name      : 'ConfirmUsersList',
    data() {
      return {
        unconfirmedUsers: []
      }
    },
    firestore() {
      return {
        unconfirmedUsers: db.collection('users').where('confirmed', '==', false)
      }
    }
  }
</script>

<style scoped lang="sass">
    .list
        display: flex
        flex-direction: column
        background: crimson
</style>
