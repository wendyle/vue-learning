// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import 'iview/dist/styles/iview.css'
import 'loaders.css/loaders.min.css'
import 'vue2-scrollbar/dist/style/vue2-scrollbar.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
