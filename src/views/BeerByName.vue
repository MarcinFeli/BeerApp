<template>
	<div class="label mx-auto mt-5">
		<v-text-field
			v-model="keyword"
			@change="searchBeer"
			prepend-icon="mdi-beer"
			placeholder="Type beer's name and hit ENTER"
			type="text"></v-text-field>
		<v-container>
			<v-row>
				<v-col v-for="beer in beers" :key="beer.id" cols="6">
					<v-card height="100%" v-if="keyword" class="d-flex flex-column justify-space-between">
						<v-card-item >
							<h2 class="ml-3 text-h5 font-weight-bold mt-3 mb-3">
								{{ beer.name }}
								<v-avatar>
									<v-img :src="beer.image_url" alt="John"></v-img>
								</v-avatar>
							</h2>
							<v-divider></v-divider>
							<v-card-text class="mb-0 d-flex flex-row text-center align-center justify-space-around">
								<p class="text-body-1 mb-0">
									<v-icon color="orange">mdi-percent-outline</v-icon> Volume: {{ beer.abv }}%
								</p>
								<p class="text-body-1 mb-0">
									<v-icon color="orange">mdi-silverware-fork-knife</v-icon> Food pairing: {{ beer.food_pairing[0] }}
								</p>
							</v-card-text>
							<v-divider></v-divider>
							<v-card-actions class="d-flex justify-center align-end">
								<v-hover v-slot="{ hover }">
									<router-link class="router" :to="{ name: 'details', params: beer }">
										<v-btn 
											class="font-weight-bold"
											style="transition: 0.3s, display:flex border:2px solid black"
											:style="{ 'background-color': hover ? '#FF6D00' : 'orange' }">
											<v-icon>mdi-magnify</v-icon>
											Szczegóły
										</v-btn>
									</router-link>
								</v-hover>
							</v-card-actions>
						</v-card-item>
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
<style lang="scss" scoped>
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
