// main.js

import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ClientTable } from 'vue-tables-2';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye,faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye,faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ClientTable);

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

new Vue({
  render: h => h(App)
}).$mount('#app')