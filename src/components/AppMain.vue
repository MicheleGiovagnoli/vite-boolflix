<template>
    <section class="main-container">
        <h1>Film</h1>
        <div class="film wrapper">
            <AppCard v-for="(movie, i) in store.movie" :key="i" :movies="movie" />
        </div>
        <h1>Tv Series</h1>
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
}
</script>
<style lang="scss">
@use '../style/partials/mixins';

.wrapper {
    @include mixins.d-flex-space-between;
    @include mixins.d-flex-wrap;
}
</style>
