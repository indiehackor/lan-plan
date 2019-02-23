<template>
    <div class="tab-container">
        <section>
            <button @click="rate">
                RATE
            </button>
            <button @click="rank">
                RANKING
            </button>
            <span :class="{right: currentRoute === '/rank', left: currentRoute === '/rate'}"></span>
        </section>
    </div>
</template>

<script>
export default {
  name: "Tabs",
  methods: {
    rate() {
      this.$router.push("/rate");
    },
    rank() {
      this.$router.push("/rank");
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped lang="sass">
button
    height: 40px
    width: 150px
    border-radius: 2px
    transition: 200ms
    font-size: 16px
    background: transparent
    outline: none
    color: white
    border: 1px solid white

    &:hover
        color: lightslategrey
        background: white
section
    margin: 20px auto
    width: 400px
    display: flex
    justify-content: space-between
    position: relative
    padding: 20px 0
    span
        width: 150px
        height: 2px
        background: white
        position: absolute
        transition: 500ms
        bottom: 5px
        &.left
            left: 0
            transform: translateX(0)
        &.right
            left: 100%
            transform: translateX(-100%)
</style>
