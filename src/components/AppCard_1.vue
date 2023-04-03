<template>
    <ul class="card-series">
        <li>Titolo :{{ series.name }}</li>
        <li v-show="series.name != series.original_name">Titolo Originale :{{ series.original_name }}</li>
        <li>Lingua :{{ series.original_language }}</li>
        <li>Voto :{{ series.vote_average }}</li>
    </ul>
</template>
<script>
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