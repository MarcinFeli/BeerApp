<template>
	<div class="label mx-auto mt-5">
		<v-text-field
			v-model="keyword"
			@change="searchBeer"
			prepend-icon="mdi-beer"
			placeholder="Search beer..."
			type="text"></v-text-field>
		<v-container>
			<v-row>
				<v-col v-for="beer in beers" :key="beer.id" cols="6">
					<v-card class="d-flex flex-column justify-space-between" height="200">
						<h2 class="ml-3 mt-3">{{ beer.name }}</h2>
						<div class="px-5 d-flex text-center align-center justify-space-between">
							<p>Volume: {{ beer.abv }}%</p>
							<p class="px-7 food">Food pairing: <br />{{ beer.food_pairing }}</p>
							<router-link class="router" :to="{ name: 'details', params: beer }">
								<v-btn outlined>
									<v-icon>mdi-magnify</v-icon>
									Szczegóły
								</v-btn>
							</router-link>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import { ref, computed } from 'vue'
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
	width: 70%;
}
.router {
	text-decoration: none;
}
.food {
	overflow: hidden;
}
</style>
