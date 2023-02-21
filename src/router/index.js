import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeerByLetter from '../views/BeerByLetter.vue'
import BeerByName from '../views/BeerByName.vue'
import BeerByProcent from '../views/BeerByProcent.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import BeerDetails from '../views/BeerDetails.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '/',
				name: 'home',
				component: HomeView,
			},
			{
				path: '/by-name/:name?',
				name: 'byName',
				component: BeerByName,
			},
			{
				path: '/by-letter/:letter?',
				name: 'byLetter',
				component: BeerByLetter,
			},
			{
				path: '/by-procent/:abv?',
				name: 'byProcent',
				component: BeerByProcent,
			},
			{
				path: '/beer-deatils/:id',
				name: 'details',
				component: BeerDetails
			}
		],
	},
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
