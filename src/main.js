import Vue from 'vue'
import App from './App.vue'
import router from './router'

//import Cors from 'cors'
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//Vue.use(Cors());

//const cors = require('cors')


