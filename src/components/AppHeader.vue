<template>
    <section class="header-container">
        <h1>BOOLFLIX</h1>
        <div class="row">
            <input type="text" placeholder="Cerca Film" v-model="store.searchText" @keyup.enter="$emit('performSearch')">
            <button @click="$emit('performSearch')">Cerca</button>
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
    background-color: $color-black-op;
    color: $color-red;
    height: 70px;
    width: 100%;
    position: fixed;

    h1 {
        padding-left: 20px;
    }


    .row {
        display: flex;

        input {
            background-color: $color-primary;
            color: $color-white;
            border: 1px solid $color-red;
            width: 300px;
            padding: 10px;
            border-radius: 3px;
            transition: all 1s ease;

            &:hover {
                background-color: $color-red-op;
            }
        }

        button {
            background-color: $color-primary;
            color: $color-white;
            border: 1px solid $color-red;
            padding: 10px;
            margin-right: 10px;
            border-radius: 3px;
            transition: all 0.5s ease;

            &:hover {
                background-color: $color-red-op;
            }
        }
    }

    h1 {
        font-size: 40px;
    }
}

@media screen and (max-width: 768px) {
    .header-container {
        h1 {
            font-size: 20px;
        }

        .row {
            input {
                width: 50px;
            }
        }
    }
}
</style>