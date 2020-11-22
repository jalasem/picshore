import Axios from 'axios'

const unsplashApiKey = process.env.VUE_APP_UNSPLASH_ACCESS_KEY

const axios = Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { Authorization: `Client-ID ${unsplashApiKey}` }
})

export const searchPhotos = (query = 'African', perPage = 8) => {
  return axios(`/search/photos?query=${query}&per_page=${perPage}`)
}
