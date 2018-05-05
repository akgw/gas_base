import { GetterTree } from 'vuex';
import { authActions } from '../actions';
import { authMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<IAuthState, IAuthState> = {
  authState: (state: IAuthState) => {
    return state;
  },
};

/**
 * vuex state(interface)
 */
export interface IAuthState {
  loading: boolean;
  isError: boolean;
  errorMessage: string;
}

/**
 * vuex state
 */
const state: IAuthState = {
  loading: false,
  isError: false,
  errorMessage: '',
};

/**
 * vuex modules
 */
export const authModule = {
  actions: authActions,
  mutations: authMutations,
  state,
  getters,
};
