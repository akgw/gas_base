import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { turnModule } from './modules/turn';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  turn: turnModule,
};

export default new Vuex.Store({
  modules,
});

