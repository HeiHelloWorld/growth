import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import main from './modules/main'
import aside from './modules/aside'

export default new Vuex.Store({
  mutations, //总mutations
  actions, // 总actions
  getters,
  modules: {
    main,
    aside
  }
})
