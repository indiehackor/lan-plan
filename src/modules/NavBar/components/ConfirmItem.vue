<template>
    <div class="item">
        <span>
            {{user.username}}
        </span>
        <button @click="handleClick">
            Godkjenn
        </button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'ConfirmItem',
    props: ['user'],
    methods: {
      ...mapActions(['confirmUser']),
      handleClick() {
        this.confirmUser(this.user.uid)
      }
    }
  }
</script>

<style scoped lang="sass">
    .item
        display: flex
        justify-content: space-between
</style>
