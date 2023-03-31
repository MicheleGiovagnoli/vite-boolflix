
<template>
  <header>
    <AppHeader />
  </header>
</template>
<script>
import axios from 'axios';
import { store } from './store.js';

import AppHeader from './components/AppHeader.vue'
export default {
  //COMPONENTI IMPORTATI
  components: {
    AppHeader,
  },

  data() {
    return {
      store,
    }
  },
  //FUNZIONI
  methods: {
  },
  //FUNZIONI-AVVIO
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=652d0b70f04231522026b9f0ef384f5b&query=ritorno+al+futuro')
      .then((response) => {
        this.store.variabile = response.data.results;
        console.log(response);
        console.log(this.store.variabile.results);
      })
  },
  //FUNZIONI-CAMBIAMENTO
  computed: {

  },
}
</script>
<style lang="scss">
@use './style/general.scss';
</style>
