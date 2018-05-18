import { MutationTree } from 'vuex';
import { ITurnState } from './modules/turn';

export const turnMutations: MutationTree<ITurnState> = {

  setTurn(state: ITurnState, turn: number): void {
    state.turn = turn;
  },

};
