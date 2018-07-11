import {
  SET_CIVILIZATION_NAME,
  SET_CIVILIZATION_DESCRIPTION
} from '../mutationTypes'

const state = {
  name: '',
  description: ''
}

const mutations = {
  [SET_CIVILIZATION_NAME] (state, name) {
    state.name = name
  },
  [SET_CIVILIZATION_DESCRIPTION] (state, description) {
    state.description = description
  }
}

const actions = {
  setCivilization ({ commit }, payload) {
    commit(SET_CIVILIZATION_NAME, payload.name)
    commit(SET_CIVILIZATION_DESCRIPTION, payload.description)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
