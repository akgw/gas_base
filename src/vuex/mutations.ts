import { MutationTree } from 'vuex';
import { ITurnState } from './modules/turn';
import { IBoardState, ICell } from './modules/board';

export const turnMutations: MutationTree<ITurnState> = {

  setTurn(state: ITurnState, turn: number): void {
    state.turn = turn;
  },

};

export const boardMutations: MutationTree<IBoardState> = {
  setBoard(state: IBoardState, board: ICell): void {
    state.board = board;
  },
};
