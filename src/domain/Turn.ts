import { Gas } from '../infrastructure/Gas';

export namespace Turn {
  /**
   * 取得先のシート名
   * @type {string}
   */

  const sheetName = 'turn';
  /**
   * ターンを取得する
   *
   * @returns {Promise<void>}
   */
  export const read = async () => {
    return await Gas.readCell(sheetName, 0, 0);
  };

  /**
   * ターンを変更する
   *
   * @returns {Promise<void>}
   */
  export const change = async (value: string) => {
    this.read().then((value) => {
      Gas.writeCell(sheetName, 0, 0, value);
    }).catch((error) => {
      console.log(error);
    });
  };

  /**
   * 次のターンを取得する
   *
   * @param {string} turn
   * @returns {string}
   */
  const nextTurn = (turn: string) => {
    if (turn !== '') {

    }
    return turn;
  };
}
