
<template>
  <header>
    <AppHeader @performSearch="getSearchMovie" />
  </header>
  <main>
    <AppMain />
  </main>
</template>
<script>
import axios from 'axios';
import { store } from './store.js';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  //COMPONENTI IMPORTATI
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    }
  },
  //FUNZIONI
  methods: {
    getSearchMovie() {
      let urlApiMovie = 'https://api.themoviedb.org/3/search/movie?api_key=652d0b70f04231522026b9f0ef384f5b&language=it-IT';
      let urlApiSeries = 'https://api.themoviedb.org/3/search/tv?api_key=652d0b70f04231522026b9f0ef384f5b&language=it-IT';
      if (this.store.searchText) {
        urlApiMovie += `&query=${store.searchText}`;
        urlApiSeries += `&query=${store.searchText}`;
        console.log(urlApiMovie);
        console.log(urlApiSeries);
      }

      axios.get(urlApiMovie)
        .then((response) => {
          this.store.movie = response.data.results;
          console.log(response.data.results);
        })
      axios.get(urlApiSeries)
        .then((response) => {
          this.store.tvSeries = response.data.results;
          console.log(response.data.results);
        })
    },
  },
  //FUNZIONI-AVVIO
  created() {
    this.getSearchMovie();
  },
  //FUNZIONI-CAMBIAMENTO
  computed: {
  },
}
</script>
<style lang="scss">
@use './style/general.scss';
</style>
