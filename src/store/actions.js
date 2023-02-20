import axiosClient from '@/axiosClient'
export function searchBeers({ commit }, keyword) {
	axiosClient.get(`beers?beer_name=${keyword}`).then(({ data }) => {
		commit(
			'setSearchedBeers',
			data.map(e => e).join()
		)
	})
}
