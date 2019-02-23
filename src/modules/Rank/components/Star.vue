<template>
    <span class="container">
        <span>
            {{stars}}
        </span>
        <star-icon/>
    </span>
</template>

<script>
import StarIcon from "../../../components/icons/Star";

export default {
  props: ["stars"],
  components: { StarIcon },
  name: "Star"
};
</script>

<style scoped lang="sass">
    .container
        border: 1px solid white
        border-radius: 2px
        padding: 0 20px
        display: flex
        justify-content: space-between
        align-items: center

    svg
        height: 15px
        width: 15px
</style>
