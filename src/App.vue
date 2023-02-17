<template>
	<v-app id="inspire">
		<v-app-bar app>
			<router-link class="router" :to="{ path: '/' }">
				<v-btn text large class="d-flex">
					<v-icon>mdi-glass-mug</v-icon>
					<v-toolbar-title>Beer Searcher</v-toolbar-title>
				</v-btn>
			</router-link>

			<v-spacer></v-spacer>

			<div class="d-flex flex-wrap justify-space-between align-center">
				<router-link class="router" :to="{ name: 'byName' }">
					<v-btn text>
						<v-icon>mdi-magnify</v-icon>
						Search beer
					</v-btn>
				</router-link>
				<router-link class="router" :to="{ name: 'byLetter' }">
					<v-btn text>
						<v-icon>mdi-beer</v-icon>
						Beer by letter
					</v-btn>
				</router-link>
				<router-link class="router" :to="{ name: 'byProcent' }">
					<v-btn text>
						<v-icon>mdi-beer</v-icon>
						Beer by %
					</v-btn>
				</router-link>
				<!-- <v-text-field class="mr-2" prepend-icon="mdi-magnify" placeholder="Search" hide-details></v-text-field> -->
				<!-- <v-btn class="mr-2"> Search </v-btn>
				<v-btn> Reset </v-btn> -->
			</div>
		</v-app-bar>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	}),
}
</script>

<style lang="scss">
.router {
	text-decoration: none;
}
</style>
