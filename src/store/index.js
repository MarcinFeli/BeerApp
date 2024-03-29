import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import getters from './getters'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: state,
	actions: actions,
	mutations: mutations,
	getters: getters,
})

export default store
