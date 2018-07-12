import { SET_VISIBILITY } from '../mutationTypes'

const state = {
  routes: [
    {
      visible: true,
      title: 'New game',
      path: '/newgame'
    },
    {
      visible: false,
      title: 'Overview',
      path: '/'
    },
    {
      visible: true,
      title: 'Options',
      path: '/options'
    }
  ]
}

const mutations = {
  [SET_VISIBILITY] (state, payload) {
    state.routes.forEach(element => {
      if (element.title === payload.description) {
        element.visible = payload.visible
      }
    })
  }
}

const actions = {
  setRoutes ({ commit }, payload) {
    payload.routes.forEach(element => {
      commit(SET_VISIBILITY, {
        description: element.title,
        visible: element.visible
      })
    })
  },
  setVisibility ({ commit }, payload) {
    commit(SET_VISIBILITY, {
      description: payload.description,
      visible: payload.visible
    })
  },
  setGroupVisibility ({ commit }, payload) {
    payload.titles.forEach(element => {
      commit(SET_VISIBILITY, {
        description: element,
        visible: payload.visible
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
