<template>
    <transition name="fade">
        <div v-if="modals.confirmModal.open" class="overlay"
             @click="handleOverlayClick"
        >
            <div class="modal" @click="preventClick">
                <header>
                    <h1>Er du sikker?</h1>
                </header>
                <main>
                    <h2>Gi en {{ratingType}} til {{modals.confirmModal.username}}</h2>
                    <label for="comment">Frivillig kommentar</label>
                    <textarea v-model="comment" id="comment"></textarea>
                </main>
                <footer>
                    <!--TODO Lag en Button component som kan brukes over alt-->
                    <button @click="handleConfirm">Tildel</button>
                    <button @click="handleCancel">Avbryt</button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Modal",
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    ...mapActions([
      "hideModal",
      "giveStar",
      "giveHonour",
      "giveThumb",
      "hideModal"
    ]),
    handleOverlayClick(e) {
      if (e.key === "Escape" || e.type === "click") {
        this.hideModal("confirm");
      }
    },
    preventClick(e) {
      e.stopPropagation();
    },
    handleConfirm() {
      let uid = this.modals.confirmModal.uid;
      switch (this.modals.confirmModal.type) {
        case "star":
          this.giveStar({
            uid,
            comment: this.comment,
          });
          this.hideModal();
          break;
        case "honour":
          this.giveHonour({
            uid,
            comment: this.comment,
          });
          this.hideModal();
          break;
        case "thumbDown":
          this.giveThumb({
            uid,
            comment: this.comment,
          });
          this.hideModal();
          break;
      }
    },
    handleCancel() {
      this.hideModal();
    }
  },
  computed: {
    ...mapState(["modals"]),
    ratingType() {
      switch (this.modals.confirmModal.type) {
        case "star":
          return "Stjerne"
        case "honour":
          return "Honour"
        case "thumbDown":
          return "Tommel Ned"
        default:
          return 'error'
      }
    }
  },
  created: function() {
    window.addEventListener("keyup", this.handleOverlayClick);
  }
};
</script>

<style scoped>
.modal {
  box-sizing: border-box;
  padding: 20px;
  height: 400px;
  width: 400px;
  background: white;
  position: absolute;
  top: 100px;
  color: #2e8edd;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 2fr auto;
  grid-template-areas:
    "header  header  header"
    "main    main    main"
    "footer  footer  footer";
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

textarea {
  box-sizing: border-box;
  border: 1px solid #2e8edd;
  border-radius: 2px;
  height: 40%;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  padding: 5px;
  color: #2e8edd;
}
textarea:focus {
  outline: none;
}

footer {
  grid-area: footer;
  display: flex;
  justify-content: flex-end;
}

button {
  margin-right: 20px;
  height: 40px;
  width: 100px;
  border: 1px solid #2e8edd;
  color: #2e8edd;
  border-radius: 2px;
  font-size: 16px;
  transition-property: background, color;
  transition-duration: 200ms;
}

button:hover {
  background: #2e8edd;
  color: white;
}

button:focus {
  outline: none;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
