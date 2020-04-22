import { SET_ADD_COUNT, SET_SUBTRACT_COUNT } from "../mutation_type"

const state = {
  count: 1
}

const mutations = {
  [SET_ADD_COUNT] (state) {
    state.count ++
  },
  [SET_SUBTRACT_COUNT] (state) {
    state.count --
  }
}

const actions = {
  add({ commit }) {
    commit(SET_ADD_COUNT)
  },
  subtract({ commit }) {
    commit(SET_SUBTRACT_COUNT)
  }
}

export default {
  state,
  mutations,
  actions
}
