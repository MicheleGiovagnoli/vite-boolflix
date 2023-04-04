<template>
    <div class="wrapper-card">
        <div class="card"
            :style="{ backgroundImage: `url(${'https://image.tmdb.org/t/p/w200/' + this.movies.poster_path})` }">
            <div class="card-info">
                <ul>
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
                        Voto :<i class="fa-solid fa-star" v-for="(star, i) in vote(movies.vote_average)" :key="i"></i>
                        <i class="fa-regular fa-star" v-for="(star, i) in 5 - vote(movies.vote_average)" :key="i"></i>
                    </li>
                </ul>
            </div>
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
.wrapper-card {
    width: calc((100% / 6) - 10px);

    .card {
        min-height: 300px;
        transition: all 3s ease;

        &:hover .card-info {
            display: block;
            background-color: black;
        }

        .card-info {
            color: red;
            display: none;
            height: 300px;
            transition: all 3s ease;

            ul {
                list-style: none;
            }
        }
    }
}
</style>