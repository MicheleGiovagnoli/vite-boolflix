<template>
    <div class="card">
        <h4>Titolo :{{ title }}</h4>
        <h4 v-show="title != original_title">Titolo Originale :{{ original_title }}</h4>
        <h4>Lingua :{{ language }}</h4>
        <h4>Voto :{{ vote }}</h4>
    </div>
</template>
<script>
export default {
    nome: 'AppCard',
    props: {
        title: String,
        original_title: String,
        language: String,
        vote: Number,
    },
}
</script>
<style lang="scss">
.card {
    padding: 20px;
    border: black 1px solid;
    width: calc(100% / 6);
    min-height: 300px;
}
</style>