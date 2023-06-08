const url = 'https:api.themoviedb.org/3/search/movie?api_key=02708c4929ad93aa5e68f8ee7bfa4445&query='

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
    }
  },
  actions: {
    async getMovies(context, search) {
      try {
        context.commit('changeLoader')
        const res = await fetch(`${url}${search}`)
        const data = await res.json()
        context.commit('setMovies', data.result)
        context.commit('changeLoader')
      } catch (err) {
        context.commit('changeLoader')
        console.log(err)
      }
    }
  }
}

export default search