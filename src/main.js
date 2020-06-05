import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Importing Google maps plugin //
import * as VueGoogleMaps from 'vue2-google-maps'

import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKKuIQa-t2-e65wWrlH7BNRM9KhDau9a4',
    libraries: 'places', 
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





