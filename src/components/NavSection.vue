<template >
    <v-app-bar color="orange orange-darken-3" app>
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
                    Beer by first letter
                </v-btn>
            </router-link>
            
            <!-- <v-text-field class="mr-2" prepend-icon="mdi-magnify" placeholder="Search" hide-details></v-text-field> -->
            <!-- <v-btn class="mr-2"> Search </v-btn>
            <v-btn> Reset </v-btn> -->
        </div>
    </v-app-bar>
</template>
<script>
export default {
    name:'NavSection'
}
</script>
<style lang="">
    
</style>