export namespace ConvertCell {

  interface IconvertForSheet {
    [key:number]: string;
  }

  const convertForSheet: IconvertForSheet = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
  };

  /**
   * x軸を変換
   *
   * @param {number} x
   * @returns {string}
   */
  export const convertX = (x: number): string => {
    return convertForSheet[x];
  };

  /**
   * y軸を変換
   *
   * @param {number} y
   * @returns {string}
   */
  export const convertY = (y: number): string => {
    return (y + 1).toString();
  };
}
