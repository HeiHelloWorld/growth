import { CHANGE_ASIDE } from '../mutation_type'

const state = {
  currentChildrenRouter: [], // 当前页面模块的子路由
}

const mutations = {
  [CHANGE_ASIDE] (state, {chlidrenRouterArr}) {
    state.currentChildrenRouter = chlidrenRouterArr
    console.log('vuex', state.currentChildrenRouter)
  }
}

const actions = {
  changeCurrentChildrenRouter({commit}, chlidrenRouterArr) {
    commit(CHANGE_ASIDE, {chlidrenRouterArr})
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
