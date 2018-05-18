import { ActionContext, ActionTree } from 'vuex';
import { ITurnState } from './modules/turn';
import { Turn } from '../domain/Turn';

export const turnActions: ActionTree<ITurnState, ITurnState> = {
  /**
   * ターンの取得
   *
   * @param {Commit} commit
   */
  getTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.read()
        .then((value) => {
          commit('setTurn');
        })
        .catch((error) => {
          console.log(error);
        });
  },

  /**
   * ターンの変更
   *
   * @param {Commit} commit
   */
  changeTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.change()
        .then(() => {

        })
        .catch(() => {

        });
  },
};
