import axios from 'axios'
const axiosClient = axios.create({
	baseURL: 'https://api.punkapi.com/v2/',
})

export default axiosClient
