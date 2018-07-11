import Vue from 'vue'
import Router from 'vue-router'
import NewGame from './views/NewGame.vue'
import Overview from './views/Overview.vue'
import Options from './views/Options.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newgame',
      name: 'newgame',
      component: NewGame
    },
    {
      path: '/',
      name: 'overview',
      component: Overview
    },
    {
      path: '/options',
      name: 'options',
      component: Options
    }
  ]
})
