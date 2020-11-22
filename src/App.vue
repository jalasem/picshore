<template>
  <div id="app">
    <header>
      <h1 class="heading" v-if="query && resultFetched">
        Search Results for
        <q v-text="query" />
      </h1>
      <form
        v-else
        @submit.prevent="search">
        <button type="submit">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="icon"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <input
          type="search"
          placeholder="Search for photos"
          v-model="query"
        />
      </form>
    </header>

    <main>
      <photo-loader v-if="requesting" />
      <template v-else>
        <photo
          v-for="photo in photos"
          :key="photo.id"
          :data="photo"
        />
      </template>
    </main>
  </div>
</template>

<script>
import Photo from './components/Photo.vue'
import PhotoLoader from './components/PhotoLoader.vue'

import { searchPhotos } from './services/unsplash'

export default {
  name: 'App',
  components: {
    Photo,
    PhotoLoader
  },
  data: () => ({
    photos: null,
    query: '',
    requesting: false,
    resultFetched: false
  }),
  methods: {
    searchPhotos,
    async search () {
      try {
        this.requesting = true

        const { data } = this.query ? await this.searchPhotos(this.query) : await this.searchPhotos()
        this.photos = data.results

        if (this.query) this.resultFetched = true
      } catch (err) {
        console.log({ err })
      } finally {
        this.requesting = false
      }
    }
  },
  created () {
    this.search()
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

#app {
  header {
    background: #dde2e9;
    padding: 10rem;

    .heading {
      font-weight: 500;
      font-size: 2.5rem;

      q {
        color: #6d7b91;
      }
    }

    form {
      background: white;
      padding: 1rem;
      display: flex;
      align-items: center;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
      border: 1px solid transparent;
      border-radius: 4px;

      &:focus-within {
        border-color: rgba(0, 0, 0, 0.1);
      }

      button {
        margin-right: 0.5rem;
        border: none;
        background: none;
      }

      .icon {
        height: 1.45rem;
        stroke: rgba(0, 0, 0, 0.25);
      }

      input {
        flex-grow: 1;
        border: none;
        padding: .5rem;
        font-size: 1.25rem;
      }
    }
  }

  input:focus, button:focus {
    outline: none;
  }

  main {
    margin: auto;
    padding: 0 2rem 4rem;
    max-width: 80vw;
    margin-top: -5rem;
    column-count:  3;
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    height: auto;
    min-height: 80vh;

    @media (max-width: 1024px) {
      column-count: 2;
    }
    @media (max-width: 800px) {
      column-count: 1;
    }

    .photo {
      margin-bottom: 2.5rem;
      overflow: hidden;
      border-radius: 5px;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        filter: brightness(0.6);
        transition: filter ease-in-out 0.3s;
      }

      &:hover img {
        filter: brightness(0.8);
      }
    }
  }
}
</style>
