<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-4">Network</div>
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

      <div class="body-2 mb-3 mt-5">Signer</div>
      <v-card>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs11>
              <div>GB7SNUEINOB7Q7JHTQJSKSV7TLYMWM465AWGZJEK7XYHHX47WGLGUSNW</div>
              <small class="grey--text">m4mxM7YvPxwHJZsPoFb8tVvrhUicLfcUEXVnPMHFjWhDL64911YcZntCejZlZ0SOOktJFW3i2WHGSsGfR5QuAg==</small>
            </v-flex>
            <v-flex xs1>
              <v-btn icon flat error><v-icon>close</v-icon></v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider></v-divider>
        <template v-if="signingWithSecret">
          <v-card-text>
            <v-text-field
              placeholder="Secret key"
              v-model="secret"
              hide-details
              :error="secretHasError"
              class="pt-0"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
        </template>
        <v-card-actions>
          <v-btn flat @click="signWithSecret">Sign with Secret</v-btn>
          <v-btn flat @click="signWithLedger" :loading="signingWithLedger">Sign with Ledger</v-btn>
        </v-card-actions>
      </v-card>

      <div class="text-xs-right">
        <v-btn color="blue" dark class="mx-0 mt-4" @click="process">
          Finish
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
    signingWithSecret: false,
    signingWithLedger: false,
    secret: '',
    secretHasError: false,
    network: 0,
    networkPassphrase: Stellar.Networks.PUBLIC
  }),

  watch: {
    secret (key) {
      this.secretHasError = true

      if (Stellar.StrKey.isValidEd25519SecretSeed(key)) {
        this.signTransaction(key)
        this.signingWithSecret = false
        this.secretHasError = false
      }
    },

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

  methods: {
    signWithSecret () {
      this.signingWithSecret = !this.signingWithSecret
    },

    signWithLedger () {
      this.signingWithLedger = true
    },

    signTransaction (key) {
      this.$store.commit('SIGN_TRANSACTION', Stellar.Keypair.fromSecret(key))
    },

    process () {
      this.$router.push({name: 'result'})
    }
  }
}
</script>

<style>
.network {
  position: relative;
  top: 3px;
}

.network input {
  font-size: 14px;
}

.network .input-group__details {
  display: none;
}

.btn-toggle--selected {
  box-shadow: none;
}
</style>
