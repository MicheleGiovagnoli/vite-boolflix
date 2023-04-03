<template>
    <ul class="card-series">
        <li>Titolo :{{ series.name }}</li>
        <li v-show="series.name != series.original_name">Titolo Originale :{{ series.original_name }}</li>
        <li>Lingua : <span :class="`fi fi-${series.original_language}`"></span></li>
        <li>Voto :{{ series.vote_average }}</li>
    </ul>
</template>
<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    nome: 'AppCard',
    props: {
        series: Object,
    },
}
</script>
<style>
.card-series {
    padding: 20px;
    border: black 1px solid;
    width: calc(100% / 6);
    min-height: 300px;
}
</style>