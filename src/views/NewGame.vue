<template>
  <v-container fluid>
    <h1>New game</h1>
    <v-stepper v-model="currentStep" vertical>
      <v-stepper-step
        :complete="currentStep > 1"
        step="1"
      >
        Welcome
      </v-stepper-step>

      <v-stepper-content step="1">
        <p>Hello world!</p>
        <v-btn @click="currentStep = 2">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="currentStep > 2"
        step="2"
      >
        Select civilization
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-select
          v-model="civilizationStep.selected"
          label="Civilization"
          :items="civilizationStep.list"
          :error-messages="civilizationErrors"
          item-text="name"
          item-value="name"
          return-object
          required
          @change="$v.civilizationStep.selected.$touch()"
          @blur="$v.civilizationStep.selected.$touch()"
        />
        <v-textarea
          name="civilization-description"
          label="Description"
          :value="civilizationDescription"
          readonly
        />
        <v-btn @click="advanceCivilizationStep()">Continue</v-btn>
      </v-stepper-content>

      <v-stepper-step
        :complete="currentStep > 3"
        step="3"
      >
        Create leader
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-text-field
          v-model="leaderStep.firstName"
          label="First name"
          placeholder="John"
          :error-messages="firstNameErrors"
          required
          @input="$v.leaderStep.firstName.$touch()"
          @blur="$v.leaderStep.firstName.$touch()"
        />
        <v-text-field
          v-model="leaderStep.lastName"
          label="Last name"
          placeholder="Smith"
          :error-messages="lastNameErrors"
          required
          @input="$v.leaderStep.lastName.$touch()"
          @blur="$v.leaderStep.lastName.$touch()"
        />
        <v-btn @click="advanceLeaderStep()">Continue</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      currentStep: 1,
      civilizationStep: {
        selected: null,
        list: [
          {
            name: 'AAA',
            description: 'aaa'
          },
          {
            name: 'BBB',
            description: 'bbb'
          }
        ]
      },
      leaderStep: {
        firstName: '',
        lastName: ''
      }
    }
  },
  computed: {
    civilizationDescription: function () {
      if (this.civilizationStep.selected) {
        return this.civilizationStep.selected.description
      } else {
        return ''
      }
    },
    civilizationErrors: function () {
      const errors = []
      if (!this.$v.civilizationStep.selected.$dirty) return errors
      !this.$v.civilizationStep.selected.required && errors.push('You haven\'t selected any civilization.')
      return errors
    },
    firstNameErrors: function () {
      const errors = []
      if (!this.$v.leaderStep.firstName.$dirty) return errors
      !this.$v.leaderStep.firstName.required && errors.push('First name is required.')
      return errors
    },
    lastNameErrors: function () {
      const errors = []
      if (!this.$v.leaderStep.lastName.$dirty) return errors
      !this.$v.leaderStep.lastName.required && errors.push('Last name is required.')
      return errors
    }
  },
  methods: {
    advanceCivilizationStep () {
      this.$v.civilizationStep.$touch()
      if (!this.$v.civilizationStep.$invalid) {
        this.currentStep = 3
      } else {
        this.currentStep = 2
      }
    },
    advanceLeaderStep () {
      this.$v.leaderStep.$touch()
      if (!this.$v.leaderStep.$invalid) {
        this.setGameInfo({
          version: '0.1.0',
          playedBefore: true
        })
        this.setCivilization({
          name: this.civilizationStep.selected.name,
          description: this.civilizationStep.selected.description
        })
        this.setName({
          firstName: this.leaderStep.firstName,
          lastName: this.leaderStep.lastName
        })
        this.setVisibility({
          description: 'New game',
          visible: false
        })
        this.setVisibility({
          description: 'Overview',
          visible: true
        })
        this.currentStep = 4
        this.$router.push('/')
      } else {
        this.currentStep = 3
      }
    },
    ...mapActions([
      'setGameInfo'
    ]),
    ...mapActions('civilization', [
      'setCivilization'
    ]),
    ...mapActions('leader', [
      'setName'
    ]),
    ...mapActions('navigation', [
      'setVisibility'
    ])
  },
  validations: {
    civilizationStep: {
      selected: {
        required
      }
    },
    leaderStep: {
      firstName: {
        required
      },
      lastName: {
        required
      }
    }
  }
}
</script>
