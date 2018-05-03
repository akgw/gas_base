import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { sync } from './routerSync';
sync(router);

new Vue({
  el: '#app',
  router,
  render: h => h(App, {}),
});