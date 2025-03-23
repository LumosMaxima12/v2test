import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "./mock";
import "./styles/global.less"
import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;
Vue.config.productionTip = false
import "./api/banner";
import vLoading from "./directives/loading"

Vue.directive("loading", vLoading)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
