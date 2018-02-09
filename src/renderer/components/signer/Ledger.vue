<template>
  <div>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs11>
          <v-text-field
            placeholder="BIP32 Path"
            v-model="bip32Path"
            hide-details
            :rules="bip32PathRules"
            class="pt-0"
          ></v-text-field>
        </v-flex>
        <v-flex xs1 class="">
          <v-btn flat icon @click="sign" :loading="loading">
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Stellar from 'stellar-sdk'
import StellarLedger from 'stellar-ledger-api'

export default {
  data: () => ({
    loading: false,
    bip32Path: '44\'/148\'/0\'',
    bip32PathRules: [path => {
      if (!path.startsWith('44\'/148\'')) {
        return false
      }

      path.split('/').forEach(element => {
        if (!element.toString().endsWith('\'')) {
          return false
        }
      })

      return true
    }]
  }),

  methods: {
    sign () {
      this.loading = true

      StellarLedger.comm_node.create_async(20, true)
        .then(comm => {
          const api = new StellarLedger.Api(comm)

          return api.getPublicKey_async(this.bip32Path)
            .then(result => {
              return result['publicKey']
            })
            .then(publicKey => {
              api.signTx_async(this.bip32Path, this.$store.getters.transaction)
                .then(result => {
                  this.$store.commit('ADD_SIGNATURE', new Stellar.xdr.DecoratedSignature({
                    hint: Stellar.Keypair.fromPublicKey(publicKey).signatureHint(),
                    signature: result['signature']
                  }))
                })
            })
            .then(() => {
              this.loading = false
            })
        })
        .catch((err) => { console.log(err) })
    }
  }
}
</script>
