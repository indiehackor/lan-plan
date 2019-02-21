<template>
    <div class="overlay"
         @click="handleOverlayClick"
    >
        <div class="modal" @click="preventClick">
            <span>
                TEST
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Modal",
  methods: {
    ...mapActions(["hideModal"]),
    handleOverlayClick(e) {
      if (e.key === 'Escape' || e.type === 'click') {
        this.hideModal("confirm")
      }
    },
    preventClick(e) {
      e.stopPropagation();
    }
  },
  created: function () {
    window.addEventListener('keyup', this.handleOverlayClick)
  },
};
</script>

<style scoped lang="sass">
    .modal
        height: 400px
        width: 400px
        background: white
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        top: 100px
        color: #2E8EDD
        left: 50%
        transform: translateX(-50%)
        border-radius: 5px
    .overlay
        background: rgba(0,0,0,0.6)
        position: absolute
        z-index: 1
        top: 0
        left: 0
        bottom: 0
        right: 0
</style>
