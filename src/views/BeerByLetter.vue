<template>
	<div>
		<div class="d-flex px-2 pt-5 flex-wrap justify-center">
			<router-link
				class="mx-1 router-text"
				:to="{ name: 'byLetter', params: { letter } }"
				v-for="letter in letters"
				:key="letter">
				{{ letter }}
			</router-link>
		</div>
		<div>
			<v-row>
				<v-col v-for="beer in beers" :key="beer.id" cols="6">
					<v-card class="d-flex flex-column justify-space-between" height="200">
						<h2 class="ml-3 mt-3">
							{{ beer.name }}
							<v-avatar>
								<v-img :src="beer.image_url" alt="John"></v-img>
							</v-avatar>
						</h2>
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
		</div>
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
	created() {
		axiosClient.get(`beers?beer_name=${this.letter}`).then(response => {
			this.beers = response.data
			console.log(this.beers)
		})
	},
}
</script>

<style lang=""></style>
