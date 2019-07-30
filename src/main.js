import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import {router} from './router.js'
import vuetify from './plugins/vuetify'


new Vue({
  el: '#app',
  store,
  router,
  vuetify,
  render: h => h(App)
})
