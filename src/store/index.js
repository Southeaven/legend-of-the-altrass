import Vue from 'vue'
import Vuex from 'vuex'
import navigation from './modules/navigation'
import leader from './modules/leader'
import civilization from './modules/civilization'
import {
  SET_PLAYED_BEFORE,
  SET_VERSION
} from './mutationTypes'
import convertSave from '../utils/convertSave'

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
  setGameInfo ({ commit }, payload) {
    commit(SET_PLAYED_BEFORE, payload.playedBefore)
    commit(SET_VERSION, payload.version)
  },
  hydrateStore ({ dispatch }) {
    if (localStorage.getItem('the-lands-of-altrass')) {
      const loadedData = JSON.parse(localStorage.getItem('the-lands-of-altrass'))
      const savedData = convertSave(loadedData)
      dispatch('setGameInfo', {
        playedBefore: savedData.playedBefore,
        version: savedData.version
      })
      dispatch('navigation/setRoutes', { routes: savedData.navigation.routes })
      dispatch('leader/setName', {
        firstName: savedData.leader.firstName,
        lastName: savedData.leader.lastName
      })
      dispatch('civilization/setCivilization', {
        name: savedData.civilization.name,
        description: savedData.civilization.description
      })
      console.log('Game data loaded!')
    }
  },
  persistStore ({ state }) {
    let preparedData = {}
    preparedData.playedBefore = state.playedBefore
    preparedData.version = state.version
    preparedData.navigation = state.navigation
    preparedData.leader = state.leader
    preparedData.civilization = state.civilization
    localStorage.setItem('the-lands-of-altrass', JSON.stringify(preparedData))
    console.log('Game data saved!')
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
  actions,
  strict: process.env.NODE_ENV !== 'production'
})
