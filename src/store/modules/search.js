const url = 'https:api.themoviedb.org/3/search/movie?api_key=2b437c770854296315157c2c12bd507c&query='

const search = {
  state: {
    loader: false,
    movies: []
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    },
    changeLoader(state) {
      state.loader = !state.loader
    },
  },
  actions: {
    async getMovies(context, search) {
      try {
        context.commit('changeLoader')

        const res = await fetch(url + search)
        const data = await res.json()

        context.commit('setMovies', data.results)

        context.commit('changeLoader')
      } catch (err) {
        context.commit('changeLoader')
        console.log(err)
      }
    }
  }
}

export default search