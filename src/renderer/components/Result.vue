<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-3">Signed Transaction</div>
      <v-card>
        <v-card-text>
          <v-text-field
            v-model="transaction"
            multi-line
            hide-details
            readonly
            class="pt-0"
          ></v-text-field>
        </v-card-text>
      </v-card>
      <div class="nav-buttons mt-4">
        <v-spacer></v-spacer>
        <v-icon>chevron_left</v-icon>
        <router-link :to="{name: 'signer'}">
          Back
        </router-link>
        <v-btn color="grey" dark @click="reset">
          Reset
        </v-btn>
        <v-btn color="blue" class="mr-0" dark>
          Copy
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    transaction () {
      return this.$store.getters.transaction.toEnvelope().toXDR('base64')
    }
  },

  methods: {
    reset () {
      this.$store.commit('REMOVE_TRANSACTION')
      this.$router.push({name: 'transaction'})
    }
  }
}
</script>
