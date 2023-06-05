<template id="app">
  <header class="header">
    <img class="header__logo" src="./assets/logo.png" alt="logo">
    <h1>My Favorite Movies</h1>
  </header>
  <div class="tabs">
    <button 
      :class="['btn', {btn_active: activeTab === 1}]" 
      @click="setTab(1)"
    >Favorite</button>
    <button 
      :class="['btn', {btn_active: activeTab === 2}]" 
      @click="setTab(2)"
    >Search</button>
  </div>
  <div class="movies" v-if="activeTab === 1">
    <div>
      <h2 style="display: inline-block; margin-right: 10px;">Watched Movies</h2>
      <h4 style="display: inline-block;">(Count: {{ watchedMovies.length }})</h4>
      <MovieItem 
        v-for="movie in watchedMovies" 
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <h2 style="display: inline-block; margin-right: 10px;">All Movies</h2>
    <h4 style="display: inline-block;">(Count: {{ movies.length }})</h4>
    <MovieItem 
      v-for="movie in movies" 
      :key="movie.id"
      :movie="movie"
    />
  </div>
  <div class="search" v-else>Search</div>
</template>

<script setup>
import { computed } from '@vue/runtime-core'
import store from './store'
import MovieItem from './components/MovieItem'

const activeTab = computed(() => store.state.movies.activeTab)

const movies = computed(() => store.state.movies.list)

const watchedMovies = computed(() => store.getters.watchedMovies)

const setTab = (id) => {
  store.commit('setActiveTab', id)
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header__logo {
  max-width: 40px;
  margin-right: 10px;
}
.tabs {
  width: max-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.movies {
  max-width: 800px;
  margin: 0 auto;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn_active {
  background: #37df5c;
}
</style>

