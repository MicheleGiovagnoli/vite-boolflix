
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
      let urlApi = 'https://api.themoviedb.org/3/search/movie?api_key=652d0b70f04231522026b9f0ef384f5b&language=it-IT';
      if (this.store.searchText) {
        urlApi += `&query=${store.searchText}`;
        console.log(urlApi);
      }

      axios.get(urlApi)
        .then((response) => {
          this.store.variabile = response.data.results;
          console.log(response);
          console.log(this.store.variabile.results);
        })
    }
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
