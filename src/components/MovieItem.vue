
<template>
  <div class="movie">
    <img 
      :src="baseImgUrl + movie.poster_path" 
      :alt="movie.original_title"
      class="movie__img"
    >
    <div>
      <div class="movie__name">
        {{ movie.original_title }}  ({{ movie.release_date }})
      </div>
      <span class="movie__overview"> {{ movie.overview }}</span>
      <div class="movie-buttons">
        <button class="btn movie-buttons__watched">
          <span v-if="!movie.isWatched" @click="toggleWatched(movie.id)">Watched</span>
          <span v-else @click="toggleWatched(movie.id)">Unwatched</span>
        </button>
        <button class="btn movie-buttons__delete" @click="deleteMovie(movie.id)">Delete</button>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from '@vue/runtime-core'
import store from '@/store';

// eslint-disable-next-line
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const movie = computed(() => props.movie)

const baseImgUrl = ref('http://image.tmdb.org/t/p/w300_and_h450_bestv2')

const toggleWatched = (id) => { store.commit('toggleWatched', id) }

const deleteMovie = (id) => { store.commit('deleteMovie', id)}

</script>

<style scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}
.movie-accept {
  margin-right: 10px;
}
.movie__img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.movie__name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}
.movie__overview {
  display: block;
  margin-bottom: 20px;
}
.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.movie-buttons__watched {
  color: #fff;
  background: #1eb4c3;
}
/* .movie-buttons__watched__icon {
  width: 15px;
  margin-left: 10px;
} */
.movie-buttons__delete {
  color: #fff;
  background: #ff2a2a;
}
</style>
