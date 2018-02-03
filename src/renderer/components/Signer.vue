<template>
  <v-layout row wrap>
    <v-flex xs10 offset-xs1>
      <div class="body-2 mb-3">Signer</div>
      <v-card>
        <v-card-text>
          
        </v-card-text>
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
export default {
  methods: {
    process () {
      this.$router.push({name: 'result'})
    }
  }
}
</script>

