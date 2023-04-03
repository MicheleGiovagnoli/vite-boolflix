import { reactive } from 'vue';

export const store = reactive(
    {
        movie: [],
        tvSeries: [],
        searchText: '',
    }
)