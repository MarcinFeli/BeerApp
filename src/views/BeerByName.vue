<template>
	<div class="label mx-auto mt-5">
		<v-text-field
			v-model="keyword"
			@change="searchBeer"
			prepend-icon="mdi-beer"
			placeholder="Search beer..."
			type="text"></v-text-field>
		<p>{{beers}}</p>
	</div>
</template>
<script>
import { computed, ref } from 'vue'
import store from '../store'
export default {
    setup() {
        const keyword = ref('')
        const beers = computed(() => store.state.searchedBeers)
		function searchBeer() {
			store.dispatch('searchBeers', keyword.value)
		}
		return { keyword, beers, searchBeer }
	},
}
</script>
<style lang="scss">
.label {
	width: 50%;
}
</style>
