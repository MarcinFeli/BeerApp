<template>
	<v-app>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="400">
      <v-card-text>
        <v-text-field
         
          density="compact"
          variant="solo"
          label="Search templates"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"></v-text-field>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
	data: () => ({
		
	}),

	methods: {
		onClick() {
			this.loading = true

			setTimeout(() => {
				this.loading = false
				this.loaded = true
			}, 2000)
		},
	},
}
// import { computed } from 'vue'
// import store from '@/store'

// const beers = computed(() => store.state.beers)
</script>
