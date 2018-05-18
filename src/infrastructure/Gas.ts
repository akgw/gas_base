import { ConvertCell } from './ConvertCell';
import convertX = ConvertCell.convertX;
import convertY = ConvertCell.convertY;

export namespace Gas {
  /**
   * 指定セルからデータを読み込み
   *
   * @param {string} sheetName
   * @param {number} x
   * @param {number} y
   * @returns {Promise<any>}
   */
  export const readCell = (sheetName: string, x: number, y: number) => {
    return new Promise((resolve, reject) => {
      google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          .sendReadCell(sheetName, convertX(x), convertY(y));
    });
  };

  /**
   * 指定セルにデータを書き込み
   *
   * @param {string} sheetName
   * @param {number} x
   * @param {number} y
   * @param {string} value
   * @returns {Promise<any>}
   */
  export const writeCell = (sheetName: string, x: number, y: number, value: string) => {
    return new Promise((resolve, reject) => {
      google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          .sendWriteCell(sheetName, convertX(x), convertY(y), value);
    });
  };
}
