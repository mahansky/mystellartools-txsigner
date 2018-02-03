<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-3">Transaction</div>
      <v-card>
        <v-card-text>
          <v-text-field 
            v-model="transaction"
            multi-line
            placeholder="Paste your Transaction Envelope XDR here"
            class="pt-0"
            hide-details
            :error="hasError"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <div class="text-xs-right">
      <v-btn :color="color" dark class="mx-0 mt-4" @click="process">
        Explain
        <v-icon>chevron_right</v-icon>
      </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Stellar from 'stellar-sdk'

export default {
  data: () => ({
    transaction: '',
    hasError: true,
    color: 'grey'
  }),

  watch: {
    transaction (value) {
      try {
        this.tx = new Stellar.Transaction(value)
        this.hasError = false
        this.color = 'blue'
      } catch (e) {
        this.tx = null
        this.hasError = true
        this.color = 'grey'
      }
    }
  },

  methods: {
    process () {
      if (!this.hasError) {
        this.$store.commit('STORE_TRANSACTION', this.tx)
        this.$router.push({name: 'explainer'})
      }
    }
  }
}
</script>

