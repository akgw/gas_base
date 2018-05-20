import { GetterTree } from 'vuex';
import { stoneActions } from '../actions';
import { stoneMutations } from '../mutations';

/**
 * vuex getters
 */
const getters: GetterTree<IStoneState, IStoneState> = {
  stone: (state: IStoneState) => {
    return state.stone;
  },
};

/**
 * vuex state(interface)
 */
export interface IStoneState {
  stone: number;
}

/**
 * vuex state
 */
const state: IStoneState = {
  stone: 0,
};

/**
 * vuex modules
 */
export const stoneModule = {
  actions: stoneActions,
  mutations: stoneMutations,
  state,
  getters,
};
