import {
  SET_FIRST_NAME,
  SET_LAST_NAME
} from '../mutationTypes'

const state = {
  firstName: '',
  lastName: ''
}

const mutations = {
  [SET_FIRST_NAME] (state, firstName) {
    state.firstName = firstName
  },
  [SET_LAST_NAME] (state, lastName) {
    state.lastName = lastName
  }
}

const actions = {
  setName ({ commit }, payload) {
    commit(SET_FIRST_NAME, payload.firstName)
    commit(SET_LAST_NAME, payload.lastName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
