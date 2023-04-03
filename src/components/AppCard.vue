<template>
    <ul class="card-film">
        <li>Titolo :{{ movies.title }}</li>
        <li v-show="movies.title != movies.original_title">Titolo Originale :{{ movies.original_title }}</li>
        <li>Lingua : <span :class="`fi fi-${movies.original_language}`"></span></li>
        <li>Voto :{{ movies.vote_average }}</li>
    </ul>
</template>
<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    nome: 'AppCard',
    props: {
        movies: Object,
    },
}
</script>
<style lang="scss">
.card-film {
    padding: 20px;
    border: black 1px solid;
    width: calc(100% / 6);
    min-height: 300px;
}
</style>