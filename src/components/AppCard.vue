<template>
    <div class="wrapper-card">
        <div class="card"
            :style="{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w342/' + this.movies.poster_path})` }">
            <ul class="card-info scroll">
                <li>
                    <h3>Titolo :</h3>
                    <span>{{ tipo == 'film' ? movies.title : movies.name }}</span>
                </li>
                <li v-show="movies.title != movies.original_title">
                    <h3>Titolo Originale :</h3>
                    <span>{{ tipo == 'film' ? movies.original_title : movies.original_name }}</span>
                </li>
                <li>
                    <h3>Lingua :</h3>
                    <span :class="`fi fi-${flag(movies.original_language)}`"></span>
                </li>
                <li>
                    <h3>Voto :</h3>
                    <i class="fa-solid fa-star" v-for="(star, i) in vote(movies.vote_average)" :key="i"></i>
                    <i class="fa-regular fa-star" v-for="(star, i) in 5 - vote(movies.vote_average)" :key="i"></i>
                </li>
                <li>
                    <h3>Overview :</h3>
                    <span>{{ movies.overview }}</span>
                </li>
            </ul>
        </div>
    </div>
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
        },
        vote(vote_average) {
            let numero = Math.ceil(vote_average)
            let array = [];
            for (let i = 0; i <= numero; i++) {
                array.push(numero);
                numero -= 1;
            }
            let test = array.length - 1;
            console.log(array);
            console.log(numero);
            console.log(array[test]);
            return array[test];
        }
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="scss">
@use '../style/general.scss';
@use '../style/partials/variables' as*;
@use '../style/partials/mixins';

.wrapper-card {
    padding: 0px 5px;

    .card {
        width: 342px;
        height: 500px;
        background-repeat: no-repeat;
        background-size: cover;

        &:hover .card-info {
            visibility: visible;
            background-color: $color-primary;
        }

        .card-info {
            color: white;
            visibility: hidden;
            height: 500px;
            list-style: none;
            padding: 10px;

            span {
                padding: 5px;
            }

            h3 {
                padding: 5px 0px;
            }

            .fa-star {
                color: goldenrod;
            }
        }
    }
}
</style>