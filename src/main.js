// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import picker from 'vue-3d-picker';
Vue.component(picker.name, picker);

import popup from './components/popup/popup.js'
Vue.use(popup);

import BackToTop from 'vue-backtotop'
Vue.use(BackToTop);
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast';
Vue.use(Toast, {
    defaultType: 'center',
    duration: 3000,
    wordWrap: true,
    width: '150px'
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
