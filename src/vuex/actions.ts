import { ActionContext, ActionTree } from 'vuex';
import { ITurnState } from './modules/turn';
import { Turn } from '../domain/Turn';
import { Board } from '../domain/Board';
import { IBoardState } from './modules/board';
import {IStoneState} from "./modules/stone";

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

export const stoneActions: ActionTree<IStoneState, IStoneState> = {
  /**
   * 盤面の初期化
   *
   * @param {Commit} commit
   */
  putStone ({ commit }: ActionContext<IStoneState, IStoneState>) {
    Stone();
  },
};