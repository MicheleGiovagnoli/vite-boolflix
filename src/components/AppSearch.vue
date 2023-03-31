<template>
    <div class="row">
        <div>
            <input type="text" placeholder="Search Film">
        </div>
        <div>
            <button>Vai!</button>
        </div>
        <!-- TEST, DA RIPORTARE SUL FILE DA CREARE APPMAIN -->
        <div v-for="(element, i) in this.store.variabile" :key="i">
            {{ element.original_title }}
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
export default {
    nome: 'AppSearch',
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss">
.row {
    display: flex;
}
</style>