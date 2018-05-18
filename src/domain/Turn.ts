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
   * @returns {Promise<any>}
   */
  export const read = async () => {
    return await Gas.readCell(sheetName, 0, 0);
  };

  /**
   * 次のターンを取得する
   *
   * @returns {Promise<number>}
   */
  export const nextTurn = async (): Promise<number> => {
    let nextTurn = 0;
    await read().then((value: number) => {
      nextTurn = value;
    });

    if (nextTurn === 0) {
      nextTurn = 1;
    } else {
      nextTurn = 0;
    }

    return nextTurn;
  };

  /**
   * ターンを変更する
   *
   * @returns {Promise<any>}
   */
  export const change = async () => {
    const value = await nextTurn();
    return Gas.writeCell(sheetName, 0, 0, value);
  };
}
