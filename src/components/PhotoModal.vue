<template>
  <div class="photo-modal" :class="{ open }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="close"
      @click="closeModal"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
    </svg>
    <div class="photo">
      <img
        v-if="data.urls"
        :src="data.urls.full"
        :alt="data.description"
      >
      <div v-if="data.user" class="credits">
        <p class="name" v-text="data.user.name" />
        <p class="location" v-text="data.user.location" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    open: {
      type: Boolean,
      default: false
    },
    closeModal: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: -100vh;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  transition: top ease-in-out 0.2s;

  .close {
    position: absolute;
    right: 5vw;
    top: 3rem;
    height: 2rem;
    cursor: pointer;
    stroke: rgba($color: white, $alpha: 1.0);
  }

  .photo {
    max-width: 80vw;
    margin: 5rem auto;
    border-radius: 1rem;
    background-color: white;
    overflow: hidden;

    img {
      width: 100%;
      height: 70vh;
      object-fit: contain;
    }

    .credits {
      padding: 1rem 4%;

      .name {
        font-size: 1.25rem;
        margin-bottom: 0;
      }
      .location {
        font-size: .85rem;
        color: gray;
      }
    }
  }

  &.open {
    top: 0;
  }
}
</style>
