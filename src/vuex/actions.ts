import { ActionContext, ActionTree } from 'vuex';
import { IAuthState } from './modules/auth';
import {Turn} from "../domain/Turn";

export const authActions: ActionTree<IAuthState, IAuthState> = {

  testChangeState({ commit }: ActionContext<IAuthState, IAuthState>) {
    Turn.fetch();
    commit('loadingTrue');
  },

};
