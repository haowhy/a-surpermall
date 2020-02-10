import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Toast from "./components/common/toast";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
// Vue.prototype.$setgoindex = function () {
//   if(window.history.length <= 1) {
//     if(location.href.indexOf('?') === -1){
//       window.location.href = location.href + '?goindex=true'
//     }else if(location.href.indexOf('?') !== -1){
//
//     }
//   }
// }
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
