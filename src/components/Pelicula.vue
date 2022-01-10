<template>
  <div id="pelicula">
    <img :src="image" :alt="title"/>
    <div id="pelicula-content">
      <h3>{{ title }}</h3>
      <span>Hace 5 minutos</span>
      <a href="#">Leer más</a>
      <button id="pelicula-favorito" class="btn btn-black" v-on:click="favoriteMovie(title)">Favorita</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pelicula",
  props: {
    callbackFavoriteMovie: Function,
    title: String,
    image: String
  },
  methods: {
    favoriteMovie: function(movie) {
      this.callbackFavoriteMovie(movie);
    },
  }
}
</script>

<style scoped>

</style>