<template>
	<v-col class="d-flex flex-column cool justify-center align-center">
		<h1 class="text-h2 mb-10">Welcome to Beer Searcher!</h1>
		<v-col v-for="beer in beers" :key="beer.id" cols="6">
			<v-card outlined class="d-flex flex-column justify-space-between">
				<v-card-item>
					<h2 class="ml-3 text-h5 font-weight-bold mt-3 mb-3">
						{{ beer.name }}
						<v-avatar>
							<v-img :src="beer.image_url" alt="John"></v-img>
						</v-avatar>
					</h2>
					<v-divider></v-divider>
					<v-card-text class="mb-0 d-flex flex-row align-center justify-space-around">
						<p class="text-h6 mb-0"><v-icon color="orange">mdi-percent-outline</v-icon> Volume: {{ beer.abv }}%</p>
						<p class="text-h6 mb-0">
							<v-icon color="orange">mdi-silverware-fork-knife</v-icon> Food pairing: {{ beer.food_pairing[0] }}
						</p>
					</v-card-text>
					<v-divider></v-divider>
					<v-card-actions class="d-flex justify-center">
						<v-hover v-slot="{ hover }">
							<router-link class="router" :to="{ name: 'details', params: beer }">
								<v-btn style="transition: 0.3s" :style="{ 'background-color': hover ? 'orange' : 'white' }" outlined>
									<v-icon>mdi-magnify</v-icon>
									Szczegóły
								</v-btn>
							</router-link>
						</v-hover>
					</v-card-actions>
				</v-card-item>
			</v-card>
		</v-col>
		<p></p>
	</v-col>
</template>

<script>
import axiosClient from '@/axiosClient'
export default {
	data() {
		return {
			beers: [],
		}
	},

	created() {
		axiosClient.get(`beers/random`).then(response => {
			this.beers = response.data
		})
	},
}
</script>

<style lang="scss" scoped>
.router-text {
	text-decoration: none;
}
.theme--light.v-sheet--outlined {
	border: 1px solid black;
}
</style>
