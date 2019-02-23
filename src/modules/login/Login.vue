<template lang="html">
    <form class="login-container" @submit="letsGo">
        <h1>Logg Inn</h1>

        <label
            for="email"
            class="input-label"
        >E-post</label>
        <input
            id="email"
            type="email"
            class="login-input"
            v-model="email"
        >
        <label
            for="password"
            class="input-label"
        >Passord</label>
        <input
            id="password"
            type="password"
            class="login-input"
            v-model="password"
        >
        <span>
            <input
                id="forgotten-password"
                type="checkbox"
                v-model="forgotPassword"
            >
            <label for="forgotten-password">
                Glemt passord
            </label>
        </span>
        <section>
            <router-link class="register-link" to="/register">
                Registrer
            </router-link>
            <button
                id="login-button"
            >{{ forgotPassword ? 'Send epost' : 'Logg inn'}}
            </button>
        </section>
    </form>
</template>

<script>
import { login, sendResetEmail } from "../../firebaseApi";
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      username: "",
      forgotPassword: false,
      newUser: false
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
    letsGo(e) {
      e.preventDefault();
      if (!this.forgotPassword) {
        this.startLoading();
        login(this.email, this.password);
        this.$router.push("/rank");
      } else {
        sendResetEmail(this.email);
        this.$router.push("/sent")
      }
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
    .login-container
        display: flex
        flex-direction: column
        width: 300px
        margin: 0 auto
        align-items: flex-start

        #login-button
            margin: 10px 0
            width: 100px

        .login-input
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
