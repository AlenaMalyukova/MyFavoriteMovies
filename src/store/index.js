import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import movies from './modules/movies'
import search from './modules/search'

const store = createStore({
  modules: {
    movies,
    search
  },
  plugins: [
    new VuexPersistence({
      key: 'my-favorite-movies',
      modules: [
        'movies',
        'search',
      ],
    }).plugin,
  ],
})

export default store