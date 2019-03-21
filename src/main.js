import Vue from 'vue'

// -- Fully import ElementUI --
// -- https://element.eleme.io/#/en-US/component/quickstart --
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from './store/index'

import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
