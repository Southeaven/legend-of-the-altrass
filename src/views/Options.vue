<template>
  <v-container fluid grid-list-md>
    <h1>Options</h1>
    <v-layout wrap>
      <v-flex
        xs12
        md4
      >
        <v-btn
          block
          color="green"
          @click="saveData()"
        >
          Save data
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <v-btn
          block
          color="amber"
          @click="exportData()"
          disabled
        >
          Export data
        </v-btn>
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <v-btn
          block
          color="red"
          @click="importData()"
          disabled
        >
          Import data
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    saveData () {
      this.persistStore()
    },
    exportData () {

    },
    importData () {

    },
    ...mapActions([
      'persistStore'
    ])
  }
}
</script>
