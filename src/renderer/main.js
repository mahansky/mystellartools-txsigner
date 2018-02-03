import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.use(Vuetify)

import('../../node_modules/vuetify/dist/vuetify.min.css')

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
