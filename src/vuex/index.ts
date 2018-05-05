import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { authModule } from './modules/auth';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  auth: authModule,
};

export default new Vuex.Store({
  modules,
});

