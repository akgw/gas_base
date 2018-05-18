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

  export const readRangeCell = (sheetName: string, fromX: number, fromY: number, toX: number, toY: number) => {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler(reject)
        .sendReadRangeCell(sheetName, convertX(fromX), convertY(fromY), convertX(toX), convertY(toY));
    });
  };

  /**
   * 指定セルにデータを書き込み
   *
   * @param {string} sheetName
   * @param {number} x
   * @param {number} y
   * @param {number} value
   * @returns {Promise<any>}
   */
  export const writeCell = (sheetName: string, x: number, y: number, value: number) => {
    return new Promise((resolve, reject) => {
      google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          .sendWriteCell(sheetName, convertX(x), convertY(y), value);
    });
  };

  /**
   * シートを初期化
   *
   * @param {string} sheetName
   * @returns {Promise<any>}
   */
  export const clearSheet = (sheetName: string) => {
    return new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler(reject)
        .sendClearSheet(sheetName);
    });
  };
}
