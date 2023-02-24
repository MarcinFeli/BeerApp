<template>
	<div>
		<div class="d-flex px-2 pt-5 flex-wrap justify-center">
			<div class="text-style mb-5">
				<p class="text-center text-h5 font-weight-bold">Choose letter...</p>
				<v-divider></v-divider>
				<router-link
					class="mx-1 router-text text-decoration-none text-h4 font-weight-bold amber--text"
					:to="{ name: 'byLetter', params: { letter } }"
					v-for="letter in letters"
					:key="letter">
					{{ letter }}
				</router-link>
			</div>
		</div>
		<v-row class="mx-2">
			<v-col v-for="beer in filteredBeers" :key="beer.id" cols="6">
				<v-card outlined height="100%" class="d-flex flex-column justify-space-around">
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
		</v-row>
	</div>
</template>
<script>
// Imports

import axiosClient from '@/axiosClient'

export default {
	data() {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
		return {
			letter: this.$route.params.letter,
			beers: [],
			letters,
		}
	},
	watch: {
		'$route.params.letter'(newLetter) {
			this.letter = newLetter
		},
	},
	created() {
		axiosClient.get(`beers?beer_name=${this.letter}`).then(response => {
			this.beers = response.data
		})
	},
	computed: {
		filteredBeers: function () {
			return this.beers.filter(beer => {
				return beer.name.startsWith(`${this.letter}`)
			})
		},
	},
}
</script>

<style lang="scss">
.text-style {
	padding: 10px;
	border: 2px solid black;
	border-radius: 5px;
}
.theme--light.v-sheet--outlined {
	border: 2px solid black;
}
</style>
