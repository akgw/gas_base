import { GetterTree } from 'vuex';
import { turnActions } from '../actions';
import { turnMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<ITurnState, ITurnState> = {
  turn: (state: ITurnState) => {
    return state.turn;
  },
};

/**
 * vuex state(interface)
 */
export interface ITurnState {
  turn: number;
}

/**
 * vuex state
 */
const state: ITurnState = {
  turn: 0,
};

/**
 * vuex modules
 */
export const turnModule = {
  actions: turnActions,
  mutations: turnMutations,
  state,
  getters,
};
