import Vue from 'vue';
import Vuex, { ModuleTree } from 'vuex';
import { turnModule } from './modules/turn';
import { boardModule } from './modules/board';

Vue.use(Vuex);

const modules: ModuleTree<any> = {
  turn: turnModule,
  board: boardModule,
};

export default new Vuex.Store({
  modules,
});

