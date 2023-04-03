<template>
    <section class="main-container">
        <h1 v-show="showFilm()">Film</h1>
        <div class="film wrapper">
            <AppCard v-for="(movie, i) in store.movie" :key="i" :movies="movie" />
        </div>
        <h1 v-show="showSeries()">Tv Series</h1>
        <div class="series wrapper">
            <AppCard_1 v-for="(serie, i) in store.tvSeries" :key="i" :series="serie" />
        </div>
    </section>
</template>
<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';
import AppCard_1 from './AppCard_1.vue';
export default {
    nome: 'AppMain',
    components: {
        AppCard,
        AppCard_1,
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
            return movies
        },
        showSeries() {
            let series = false
            if (this.store.tvSeries.length > 0) {
                series = true
            } else (series = false)
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
