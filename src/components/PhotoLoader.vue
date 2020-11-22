<template>
  <div class="loaders">
    <div
      class="loader"
      v-for="i in 6"
      :key="`loader-${i}`"
      :style="`--ht: ${height()}rem`"
    />
  </div>
</template>

<script>
export default {
  methods: {
    height () {
      return Math.floor((Math.random() * 15) + 20)
    }
  }
}
</script>

<style lang="scss" scoped>
.loaders {
  column-gap: 4rem;

  .loader {
    margin-bottom: 2rem;
    height: var(--ht);
    background: #f5f5f5;
    border-radius: 5px;
    position: relative;
    animation: pulse 1s ease-in-out infinite;

    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 1.5rem;
      left: 1.5rem;
      height: 1rem;
      width: 50%;
      background: #e6e6e6;
    }
    &:before {
      bottom: 3rem;
    }
    &:after {
      width: 30%;
    }
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}
</style>
