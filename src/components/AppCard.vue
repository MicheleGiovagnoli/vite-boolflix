<template>
    <ul class="card">
        <li>
            Titolo :{{ tipo == 'film' ? movies.title : movies.name }}
        </li>
        <li v-show="movies.title != movies.original_title">
            Titolo Originale :{{ tipo == 'film' ? movies.original_title : movies.original_name }}
        </li>
        <li>
            Lingua :<span :class="`fi fi-${flag(movies.original_language)}`"></span>
        </li>
        <li>
            Voto :{{ movies.vote_average }}
        </li>
    </ul>
</template>
<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default {
    nome: 'AppCard',
    props: {
        movies: Object,
        tipo: String
    },
    methods: {
        flag(val) {
            if (val == 'en') {
                return 'gb'
            }
            return val
        }
    }
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