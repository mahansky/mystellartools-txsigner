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
import Transport from '@ledgerhq/hw-transport-node-hid'
import Str from '@ledgerhq/hw-app-str'

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

      this.connect()
        .then(({ str }) => {
          return str.getPublicKey(this.bip32Path)
            .then(({ publicKey }) => {
              console.log(publicKey)

              return str.signTransaction(this.bip32Path, this.$store.getters.transaction.signatureBase())
                .then(({ signature }) => {
                  this.$store.commit('ADD_SIGNATURE', new Stellar.xdr.DecoratedSignature({
                    hint: Stellar.Keypair.fromPublicKey(publicKey).signatureHint(),
                    signature: signature
                  }))
                })
            })
        })
        .catch(err => console.log(err))
        .then(() => {
          this.loading = false
          this.$emit('done')
        })
    },

    connect () {
      if (this.str) {
        return Promise.resolve({
          transport: this.transport,
          str: this.str
        })
      }

      return Transport.create()
        .then(t => {
          this.transport = t
          this.str = new Str(t)

          return {
            transport: this.transport,
            str: this.str
          }
        })
    }
  },

  destroyed () {
    if (this.transport) {
      this.transport.close()
    }
  }
}
</script>
