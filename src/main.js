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

// 随便测试
import * as blogApi from "./api/blog"

blogApi.getBlogs(2, 20, 3).then((r) => {
  console.log("博客", r);
})

blogApi.getBlogTypes().then((r) => {
  console.log("博客分类", r);
})