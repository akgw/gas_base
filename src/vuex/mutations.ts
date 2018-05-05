import { MutationTree } from 'vuex';
import { IAuthState } from './modules/auth';

export const authMutations: MutationTree<IAuthState> = {

  loadingTrue(state: IAuthState): void {
    state.loading = true;
  },

};
