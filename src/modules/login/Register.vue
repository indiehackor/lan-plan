<template lang="html">
    <form class="register-container" @submit="register">
        <h1>Registrer</h1>

        <label
            for="email"
            class="input-label"
        >E-post</label>
        <input
            id="email"
            type="email"
            class="register-input"
            v-model="email"
        >
        <label
            for="username"
            class="input-label"
        >Brukernavn</label>
        <input
            id="username"
            type="text"
            class="register-input"
            v-model="username"
        >
        <label
            for="password"
            class="input-label"
        >Passord</label>
        <input
            id="password"
            type="password"
            class="register-input"
            v-model="password"
        >
        <section>
            <router-link class="register-link" to="/login">
                Logg inn
            </router-link>
            <button
                id="register-button"
            >Registrer!
            </button>
        </section>
    </form>
</template>

<script>
import { registerNewUser } from "../../firebaseApi";
import { mapActions, mapState } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    if (this.user) this.$router.push("/rank");
  },
  methods: {
    ...mapActions(["startLoading"]),
    register(e) {
      e.preventDefault();
      this.startLoading();
      registerNewUser(this.email, this.password, this.username);
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
        margin-right: 10px

        &:hover
            color: lightslategrey
            background: white
    section
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
    .register-link
        font-size: 16px
        color: white
    h1
        text-align: center
        width: 100%
    .register-container
        display: flex
        flex-direction: column
        width: 300px
        margin: 0 auto
        align-items: flex-start

        #register-button
            margin: 10px 0
            width: 100px

        .register-input
            box-sizing: border-box
            width: 100%
            height: 40px
            border-radius: 2px
            border: 1px solid #2e8edd
            color: lightslategrey
            font-size: 16px
            padding: 5px
            margin-bottom: 10px

        .input-label
            text-align: left
            margin-bottom: 5px
</style>
