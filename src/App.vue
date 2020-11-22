<template>
  <div id="app">
    Mini unsplash
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { searchPhotos } from './services/unsplash'

export default {
  name: 'App',
  data: () => ({
    photos: []
  }),
  methods: {
    searchPhotos
  },
  created () {
    searchPhotos()
      .then(({ data }) => {
        console.log({ data })
        this.photos = data.results
      })
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
</style>
