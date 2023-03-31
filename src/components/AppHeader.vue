<template>
    <section class="header-container">
        <h1>Boolflix</h1>
        <AppSearch />
    </section>
</template>

<script>
import { store } from '../store.js';
import AppSearch from './AppSearch.vue';
export default {
    nome: 'AppHeader',
    components: {
        AppSearch,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss">
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>