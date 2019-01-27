<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>Welcome!</h1>
        <div>
            {{loading ? 'Loading...' : people}}
        </div>
    </div>
</template>


<script>
  import { db } from './main'

  export default {
    name: 'app',
    data: () => ({
      people : null,
      loading: true
    }),
    created() {
      // this unbinds any previously bound reference
      this.$bind('people', db.collection('people')).then(() => {
        // this.todos = todos
        setTimeout(() => {
          this.loading = false
        }, 1000)
      })
    }
  }

</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2C3E50;
        margin-top: 60px;
    }
</style>
