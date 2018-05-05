import { ActionContext, ActionTree } from 'vuex';
import {IAuthState} from "./modules/auth";

export const authActions: ActionTree<IAuthState, IAuthState> = {

  testChangeState({ commit }: ActionContext<IAuthState, IAuthState>) {
    commit('loadingTrue');
  },

};
