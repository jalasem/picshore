<template>
  <div
    class="photo"
    @click="showPhoto(data)"
  >
    <img :src="data.urls.small" :alt="data.description">
    <div class="credits">
      <p class="name" v-text="data.user.name" />
      <p class="location" v-text="data.user.location" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    showPhoto: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.photo {
  margin-bottom: 2.5rem;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    filter: brightness(0.6);
    transition: filter ease-in-out 0.3s;
  }

  .credits {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem 1.5rem 1rem;
    color: white;

    .name {
      font-size: 1.25rem;
      margin-bottom: 0;
    }
    .location {
      font-size: .85rem;
    }
  }

  &:hover img {
    filter: brightness(0.8);
  }
}
</style>
