<template>
  <v-app
    :dark="dark"
  >
    <v-navigation-drawer
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          v-if="item.visible"
          :key="i"
          :to="item.path"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      app
      clipped-left
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>The Lands of Altrass</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      dark: false,
      drawer: null
    }
  },
  created () {
    this.hydrateStore()
    if (this.playedBefore === false) {
      this.$router.replace('/newgame')
    }
  },
  computed: {
    ...mapState(['playedBefore']),
    ...mapState('navigation', {
      items: 'routes'
    })
  },
  methods: {
    ...mapActions([
      'hydrateStore'
    ])
  }
}
</script>
