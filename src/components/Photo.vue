<template>
  <div
    class="photo"
  >
    <img :src="data.urls.small" alt="Picture">
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
