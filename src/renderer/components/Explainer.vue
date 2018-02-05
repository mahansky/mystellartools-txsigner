<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-3">Explainer</div>
      <v-card>
        <v-card-text>
          <b>Source account</b>
          <p v-text="tx.source"></p>

          <v-container grid-list-lg class="px-0 py-0">
            <v-layout row wrap>
              <v-flex xs6>
                <b>Sequence number</b>
                <p v-text="tx.sequence"></p>

                <b>Fee</b>
                <p v-text="tx.fee"></p>
              </v-flex>
              <v-flex xs6>
                <b>Memo</b>
                <p v-if="tx.memo.type !== 'none'">
                  <span v-text="tx.memo.type"></span>: 
                  <span v-text="tx.memo.value"></span>
                </p>
                <p v-else>
                  <i>None</i>
                </p>

                <b>Time bounds</b>
                <p v-if="tx.timeBounds">
                  <span v-text="tx.timeBounds.minTime"></span>
                  -
                  <span v-text="tx.timeBounds.maxTime"></span>
                </p>
                <p v-else>
                  <i>None</i>
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>

      <v-layout row wrap class="mt-2">
        <template v-for="(operation, index) in tx.operations">
          <v-flex xs1 class="text-xs-right" :key="index + operation.type + 'index'">
            <div class="title pr-3 pt-3" v-text="index + 1"></div>
          </v-flex>
          <v-flex xs11 :key="index + operation.type + 'body'">
            <v-card>
              <v-card-text>
                <div class="grey--text mb-2" v-text="firstUppercase(operation.type)"></div>
                <component :is="firstUppercase(operation.type)" :operation="operation" class="operation"></component>
              </v-card-text>
            </v-card>
          </v-flex>
        </template>
      </v-layout>

      <div class="nav-buttons mt-3">
        <v-spacer></v-spacer>
        <v-icon>chevron_left</v-icon>
        <router-link :to="{name: 'transaction'}">
          Back
        </router-link>
        <v-btn color="blue" dark class="mr-0" @click="process">
          Sign
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AccountMerge from './explainer/AccountMerge'
import AllowTrust from './explainer/AllowTrust'
import ChangeTrust from './explainer/ChangeTrust'
import CreateAccount from './explainer/CreateAccount'
import CreatePassiveOffer from './explainer/CreatePassiveOffer'
import Inflation from './explainer/Inflation'
import ManageData from './explainer/ManageData'
import ManageOffer from './explainer/ManageOffer'
import PathPayment from './explainer/PathPayment'
import Payment from './explainer/Payment'
import SetOptions from './explainer/SetOptions'

export default {
  components: {
    AccountMerge,
    AllowTrust,
    ChangeTrust,
    CreateAccount,
    CreatePassiveOffer,
    Inflation,
    ManageData,
    ManageOffer,
    PathPayment,
    Payment,
    SetOptions
  },

  computed: {
    tx () {
      return this.$store.getters.transaction
    }
  },

  methods: {
    firstUppercase (input) {
      return input.charAt(0).toUpperCase() + input.slice(1)
    },

    process () {
      this.$router.push({name: 'signer'})
    }
  }
}
</script>

<style>
.operation table tr td:first-child {
  padding-right: 16px;
  vertical-align: top;
}

.operation table tr td:last-child {
  word-break: break-all;
}
</style>
