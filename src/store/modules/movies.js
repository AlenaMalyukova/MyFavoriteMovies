const movies = {
  state: {
    list: [],
    activeTab: 2
  },
  getters: {
    watchedMovies(state) {
      return state.list.filter((el) => el.isWatched)
    },
    totalCountMovies(state) {
      return state.movies.length
    }
  }, 
  mutations: {
    setActiveTab(state, id) {
      state.activeTab = id
    },
    toggleWatched(state, id) {
      const index = state.list.findIndex(el => el.id === id)
      state.list[index].isWatched = !state.list[index].isWatched
    },
    addToList(state, object) {
      state.list.push({...object, isWatched: false})
      state.activeTab = 1
    },
    deleteMovie(state, id) {
      state.list = state.list.filter(el => el.id !==id)
    }
  }
}

export default movies