<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid grid-list-lg>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'mystellartools-txsigner'
}
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(/static/MaterialIcons-Regular.ttf) format("truetype");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

#app .application.theme--light {
  background-color: #eee;
}

main.content {
  display: flex;
}
</style>
