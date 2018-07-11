import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation'
import leader from './modules/leader'
import civilization from './modules/civilization'
import {
  SET_PLAYED_BEFORE,
  SET_VERSION
} from './mutationTypes'

Vue.use(Vuex)

const state = {
  playedBefore: false,
  version: '0.0.0'
}

const mutations = {
  [SET_PLAYED_BEFORE] (state, playedBefore) {
    state.playedBefore = playedBefore
  },
  [SET_VERSION] (state, version) {
    state.version = version
  }
}

const actions = {
  setPlayedBefore ({ commit }, payload) {
    commit(SET_PLAYED_BEFORE, payload.playedBefore)
  },
  setVersion ({ commit }, payload) {
    commit(SET_VERSION, payload.version)
  }
}

export default new Vuex.Store({
  modules: {
    navigation,
    leader,
    civilization
  },
  state,
  mutations,
  actions
})
