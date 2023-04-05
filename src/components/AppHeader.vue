<template>
    <section class="header-container">
        <h1>BOOLFLIX</h1>
        <div class="row">
            <input type="text" placeholder="Search Film" v-model="store.searchText" @keyup.enter="$emit('performSearch')">
            <button @click="$emit('performSearch')">Vai!</button>
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
    height: 70px;

    .row {
        display: flex;

        input {
            background-color: $color-primary;
            color: $color-white;
            border: 1px solid $color-red;
            width: 300px;
            padding: 10px;
        }

        button {
            background-color: $color-primary;
            color: $color-white;
            border: 1px solid $color-red;
            padding: 10px;
            margin-right: 10px;
        }
    }

    h1 {
        font-size: 40px;
    }
}
</style>