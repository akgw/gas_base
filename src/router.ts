import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import { RouterOptions } from 'vue-router/types/router';
import Top from './pages/Top.vue';

Vue.use(VueRouter);

const options: RouterOptions = {
  mode: 'history',
  routes: [
    {
      name: 'top',
      path: '/',
      component: Top,
    },
  ],
};

const router = new VueRouter(options);
router.beforeEach(async (to: Route, from: Route, next) => {
  next();
});

export default router;
