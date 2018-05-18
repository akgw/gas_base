import { ActionContext, ActionTree } from 'vuex';
import { ITurnState } from './modules/turn';
import { Turn } from '../domain/Turn';

export const turnActions: ActionTree<ITurnState, ITurnState> = {

  getTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.read()
        .then((value) => {
          commit('setTurn');
        })
        .catch((error) => {
          console.log(error);
        });
  },

  changeTurn({ commit }: ActionContext<ITurnState, ITurnState>) {
    Turn.write()
        .then((value) => {

        })
        .catch(() => {

        });
  },

};
