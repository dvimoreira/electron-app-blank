import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// Import and mounted components customns
import allComponents from './components'

Vue.config.productionTip = false
Vue.use(VueLodash, { lodash: lodash })

for (var item of allComponents) {
  Vue.component(item.name, item.component)
}

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
