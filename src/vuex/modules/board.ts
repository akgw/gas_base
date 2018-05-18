import { GetterTree } from 'vuex';
import { boardActions } from '../actions';
import { boardMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<IBoardState, IBoardState> = {
  board: (state: IBoardState) => {
    return state.board;
  },
};

/**
 * vuex state(interface)
 */
export interface ICell {
  [key: number]: (number | '')[];
}

export interface IBoardState {
  board: ICell;
}

/**
 * vuex state
 */
const state: IBoardState = {
  board: [
    ['', '', ''],
  ],
};

/**
 * vuex modules
 */
export const boardModule = {
  actions: boardActions,
  mutations: boardMutations,
  state,
  getters,
};
