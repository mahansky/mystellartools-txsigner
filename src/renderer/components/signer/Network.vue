<template>
  <v-card>
    <v-layout row wrap>
      <v-flex xs3 class="py-0">
        <v-btn-toggle v-model="network" mandatory>
          <v-btn flat>Main</v-btn>
          <v-btn flat>Test</v-btn>
          <v-btn flat>Custom</v-btn>
        </v-btn-toggle>
      </v-flex>
      <v-flex xs9 class="py-0">
        <v-text-field
          placeholder="Network passphrase"
          v-model="networkPassphrase"
          hide-details
          class="pt-0 px-3 network"
          small
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Stellar from 'stellar-sdk'

export default {
  data: () => ({
    network: 0,
    networkPassphrase: Stellar.Networks.PUBLIC
  }),

  watch: {
    network (type) {
      if (type === 0) {
        this.networkPassphrase = Stellar.Networks.PUBLIC
      } else if (type === 1) {
        this.networkPassphrase = Stellar.Networks.TESTNET
      } else {
        if (this.networkPassphrase === Stellar.Networks.PUBLIC || this.networkPassphrase === Stellar.Networks.TESTNET) {
          this.networkPassphrase = ''
        }
      }
    },

    networkPassphrase (passphrase) {
      this.network = 2

      if (passphrase === Stellar.Networks.PUBLIC) {
        this.network = 0
      } else if (passphrase === Stellar.Networks.TESTNET) {
        this.network = 1
      }

      Stellar.Network.use(new Stellar.Network(passphrase))
    }
  },

  created () {
    Stellar.Network.usePublicNetwork()
  }
}
</script>

<style scoped>
.network {
  position: relative;
  top: 3px;
}

.network >>> input {
  font-size: 14px;
}

.network >>> .input-group__details {
  display: none;
}

.btn-toggle--selected {
  box-shadow: none;
}
</style>
