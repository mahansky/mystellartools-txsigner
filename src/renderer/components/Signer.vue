<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-4">Network</div>
      <network></network>

      <div class="body-2 mb-3 mt-5">Signatures</div>
      <v-card>
        <signature 
          v-for="(signature, index) in signatures" 
          :signature="signature" 
          :index="index"
          :key="signature._attributes.signature.toString() + index"
        ></signature>

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

        <ledger v-if="signingWithLedger"></ledger>

        <v-card-actions>
          <v-btn flat @click="signingWithSecret = !signingWithSecret">Sign with Secret</v-btn>
          <v-btn flat @click="signingWithLedger = !signingWithLedger">Sign with Ledger</v-btn>
        </v-card-actions>
      </v-card>

      <div class="nav-buttons mt-4">
        <v-spacer></v-spacer>
        <v-icon>chevron_left</v-icon>
        <router-link :to="{name: 'explainer'}">
          Back
        </router-link>
        <v-btn :color="signatures.length ? 'blue' : 'grey'" dark class="mr-0" @click="process">
          Finish
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Stellar from 'stellar-sdk'
import Network from './signer/Network'
import Signature from './signer/Signature'
import Ledger from './signer/Ledger'

export default {
  components: {
    Network,
    Signature,
    Ledger
  },

  data: () => ({
    signingWithSecret: false,
    signingWithLedger: false,
    secret: '',
    secretHasError: false
  }),

  computed: {
    signatures () {
      return this.$store.getters.transaction.signatures
    }
  },

  watch: {
    secret (key) {
      this.secretHasError = true

      if (Stellar.StrKey.isValidEd25519SecretSeed(key)) {
        this.signTransaction(key)
        this.signingWithSecret = false
        this.secretHasError = false
        this.secret = ''
      }
    }
  },

  methods: {
    signTransaction (key) {
      if (Stellar.Network.current().networkPassphrase()) {
        this.$store.commit('SIGN_TRANSACTION', Stellar.Keypair.fromSecret(key))
      }
    },

    process () {
      if (this.signatures.length) {
        this.$router.push({name: 'result'})
      }
    }
  }
}
</script>
