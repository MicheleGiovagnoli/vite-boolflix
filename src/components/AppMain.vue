<template>
    <section class="main-container">
        <AppCard v-for="(element, i) in this.store.variabile" :key="i" :title="element.title"
            :original_title="element.original_title" :language="element.original_language" :vote="element.vote_average" />
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
}
</script>
<style lang="scss">
@use '../style/partials/mixins';

.main-container {
    @include mixins.d-flex-space-between;
    @include mixins.d-flex-wrap;
}
</style>
