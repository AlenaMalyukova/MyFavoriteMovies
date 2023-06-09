<template>
  <form @submit.prevent="search(searchMovie)">
    <input 
      type="text" 
      class="search-input" 
      placeholder="Input movie" 
      v-model="searchMovie">
  </form>
  <Loader v-if="store.state.search.loader"/>
  <div v-else>
    <MovieItem v-for="movie of movies" :key="movie.id" :movie="movie" :is-search="true"/>
  </div>
</template>

<script setup>
import MovieItem from './MovieItem.vue';
import { computed, ref } from 'vue'
import store from '@/store';
import Loader from './Loader.vue';

const search = (search) => { store.dispatch('getMovies', search)}

const movies = computed(() => store.state.search.movies)

const searchMovie = ref('')
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>