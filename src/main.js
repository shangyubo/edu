import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/style.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.reqs = axios

// view UI
// import 'view-design/dist/styles/iview.css';
// import { Message } from 'view-design';
// Vue.prototype.$Message = Message;

Vue.config.productionTip = false

// 根据路由设置标题
router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')