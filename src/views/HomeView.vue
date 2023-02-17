<template>
	<v-app>
		<v-responsive class="mx-auto" width="50%">
			<v-text-field prepend-icon="mdi-beer" label="Search beer..." type="text"></v-text-field>
			<div class="d-flex px-2 pt-2 flex-wrap justify-center">
				<router-link
					class="mx-1 router-text"
					:to="{ name: 'byLetter', params: { letter } }"
					v-for="letter in letters"
					:key="letter">
					{{ letter }}
				</router-link>
			</div>
			
		</v-responsive>
	</v-app>
</template>

<script>
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
export default {
	setup() {
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
		const ingredients = ref([])
		onMounted(async () => {
			const response = await axiosClient.get('beers')
			ingredients.value = response.data
			return { response }
		})
		return { letters, onMounted, ingredients }
	},
}
</script>

<style lang="scss">
.router-text {
	text-decoration: none;
}
</style>
