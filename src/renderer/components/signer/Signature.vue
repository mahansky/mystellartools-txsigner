<template>
  <div>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs11>
          <div v-text="hint"></div>
          <small class="grey--text" v-text="hash"></small>
        </v-flex>
        <v-flex xs1>
          <v-btn icon flat color="red" @click="remove"><v-icon>close</v-icon></v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-divider></v-divider>
  </div>
</template>

<script>
import Stellar from 'stellar-sdk'

export default {
  props: ['signature', 'index'],

  computed: {
    hint () {
      let keypair = new Stellar.Keypair({
        type: 'ed25519',
        publicKey: Buffer.concat([Buffer.alloc(28).fill(0), this.signature._attributes.hint])
      })

      let dots = Buffer.alloc(46).fill('.').toString()

      return `G${dots}${keypair.publicKey().substr(47, 5)}....`
    },

    hash () {
      return this.signature._attributes.signature.toString('base64')
    }
  },

  methods: {
    remove () {
      this.$store.commit('REMOVE_SIGNATURE', this.index)
    }
  }
}
</script>
