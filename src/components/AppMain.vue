<template>
    <section class="main-container">
        <h1 v-show="showFilm()">Film</h1>
        <div class="film wrapper">
            <AppCard v-for="(movie, i) in store.movie" :key="i" :movies="movie" tipo="film" />
        </div>
        <h1 v-show="showSeries()">Tv Series</h1>
        <div class="series wrapper">
            <AppCard v-for="(serie, i) in store.tvSeries" :key="i" :movies="serie" tipo="serie" />
        </div>
        <h1 v-if="showFilm() == false">Cerca un film o una serie tv..</h1>
    </section>
</template>
<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';
export default {
    nome: 'AppMain',
    components: {
        AppCard,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        showFilm() {
            let movies = false
            if (this.store.movie.length > 0) {
                movies = true
            } else (movies = false)
            console.log(movies);
            return movies
        },
        showSeries() {
            let series = false
            if (this.store.tvSeries.length > 0) {
                series = true
            } else (series = false)
            console.log(series);
            return series
        }
    }
}
</script>
<style lang="scss">
@use '../style/partials/mixins';

.wrapper {
    @include mixins.d-flex-space-between;
    @include mixins.d-flex-wrap;
}
</style>
