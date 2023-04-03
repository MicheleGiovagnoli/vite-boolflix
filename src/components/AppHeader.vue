<template>
    <section class="header-container">
        <h1>Boolflix</h1>
        <div class="row">
            <div>
                <input type="text" placeholder="Search Film" v-model="store.searchText"
                    @keyup.enter="$emit('performSearch')">
            </div>
            <div>
                <button @click="$emit('performSearch')">Vai!</button>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store.js';
export default {
    nome: 'AppHeader',
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss">
@use '../style/partials/variables' as*;
@use '../style/partials/mixins';

.header-container {
    @include mixins.d-flex-space-between;
    background-color: $color-black;
    color: $color-red;

    .row {
        display: flex;
    }
}
</style>