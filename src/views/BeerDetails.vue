<template>
	<section class="mx-auto">
		<v-col class="d-flex beer flex-column mx-auto" v-for="beer in beers" :key="beer.id" cols="12">
			<div class="first-div d-flex">
				<img class="beer-img" :src="beer.image_url" :alt="beer.name" />
				<div class="description">
					<h1 class="text-h3 mb-3">{{ beer.name }}</h1>
					<v-divider></v-divider>
					<div class="mt-3 font-weight-bold blue--text text-h5 description__tagline d-flex justify-space-around">
						<p>IBU: {{ beer.ibu }}</p>
						<p>ABV: {{ beer.abv }}%</p>
					</div>
					<div class="descritpion__text" width="50%">
						{{ beer.description }}
					</div>
				</div>
				<v-spacer></v-spacer>
				<v-btn to="/by-name" color="orange" class="mr-5 px-6 py-3">Back</v-btn>
			</div>
			<div class="food-pairing pt-5">
				<h2>Food pairing</h2>
				<ul v-if="beer.food_pairing">
					<li>{{ beer.food_pairing[0] }}</li>
					<li>{{ beer.food_pairing[1] }}</li>
					<li>{{ beer.food_pairing[2] }}</li>
				</ul>
			</div>
			<p>Author: {{ beer.contributed_by }}</p>
		</v-col>
		<v-col> </v-col>
	</section>
</template>

<script>
// Imports

import axiosClient from '@/axiosClient'

export default {
	data() {
		return {
			id: this.$route.params.id,
			beers: [],
		}
	},
	created() {
		axiosClient.get(`beers/${this.id}`).then(response => {
			this.beers = response.data
		})
	},
}
</script>
<style lang="scss">
.beer {
	.beer-img {
		height: 50vh;
		padding: 2rem 4rem;
		border: 2px solid black;
		border-radius: 15px;
	}
}
.description {
	margin-left: 2rem;
	padding: 2rem 4rem;
	height: 50%;
	width: 50%;
}
</style>
