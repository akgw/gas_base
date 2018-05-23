import { ActionContext, ActionTree } from 'vuex';
import { ITurnState } from './modules/turn';
import { Turn } from '../domain/Turn';
import { Board } from '../domain/Board';
import { Stone } from '../domain/Stone';
import { IBoardState, ICell } from './modules/board';

export const turnActions: ActionTree<ITurnState, ITurnState> = {
  /**
   * ターンの取得
   *
   * @param {Commit} commit
   */
  getTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.read().then((value) => {
      commit('setTurn', value);
    }).catch((error) => {
      console.log(error);
    });
  },

  /**
   * ターンの変更
   *
   * @param {Commit} commit
   */
  changeTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.change().then((value) => {
      commit('setTurn', value);
    }).catch((error) => {
      console.log(error);
    });
  },
};

export const boardActions: ActionTree<IBoardState, IBoardState> = {
  /**
   * 盤面の初期化
   *
   * @param {Commit} commit
   */
  clearBoard({ commit }: ActionContext<IBoardState, IBoardState>) {
    Board.initialize();
  },

  /**
   * 盤面の取得
   *
   * @param {Commit} commit
   */
  readAll({ commit }: ActionContext<IBoardState, IBoardState>) {
    Board.readAll().then((value) => {
      commit('setBoard', value);
      }).catch((error) => {
        console.log(error);
      });
  },

};

export const stoneActions: any = {
  /**
   * 石を置く
   *
   * @param {Commit} commit
   * @param {x: number; y: number} payload
   */
  putStone ({ commit }: ActionContext<any, any>, payload: {x: number, y: number}) {
    // 最新の盤面を取得
    Board.readAll().then((board: ICell) => {
      Stone.put(payload.x, payload.y, board);
    }).catch((error) => {
      console.log(error);
    });

  },
};