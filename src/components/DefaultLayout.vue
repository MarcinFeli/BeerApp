<template>
	<v-app id="inspire">
		<NavSection />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>
<script>
import NavSection from './NavSection.vue'
export default {
	components: {
		NavSection: NavSection,
	}
}
</script>
<style lang=""></style>
