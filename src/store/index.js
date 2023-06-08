import { createStore } from 'vuex'
import movies from './modules/movies'
import search from './modules/search'

const store = createStore({
  modules: {
    movies,
    search
  },
})

export default store