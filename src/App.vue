<template>
    <div id="app">
        <nav-bar/>
        <modal/>
        <p v-if="loading">Laster..</p>
        <router-view v-else/>
    </div>
</template>


<script>
import NavBar from "./modules/NavBar/NavBar";
import { fb } from "./main";
import { mapActions, mapState } from "vuex";
import Modal from "./modules/Modal/Modal";

export default {
  name: "app",
  components: { NavBar, Modal },
  beforeCreate() {
    fb.auth().onAuthStateChanged(user => {
      this.checkUser(user);
    });
  },
  methods: {
    ...mapActions(["setCurrentUser", "stopLoading"]),
    checkUser(user) {
      if (user) {
        this.setCurrentUser(user);
      } else {
        this.$router.push("/login");
      }
      this.stopLoading();
    }
  },
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style>
#app {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 70px;
  padding: 40px;
}

h1,
h2 {
  text-transform: uppercase;
  line-height: 0.8;
}

h1 {
  font-size: 40px;
  font-weight: 200;
  letter-spacing: 4px;
}

h2 {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
}

body {
  background: linear-gradient(270deg, #ea49ab, #2e8edd);
  background-size: 400% 400%;
  animation: AnimationName 60s ease infinite;
  color: white;
}

@keyframes AnimationName {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
