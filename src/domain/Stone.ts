import {ICell} from "../vuex/modules/board";

export namespace Stone {

  /**
   * 石を置く
   */
  export const put = (x: number, y: number, board: ICell) => {
    // todo 石が置けるかどうか
    if (puttable(x, y, board) !== true) {
      console.log("hoge");
      return false;
    }

    return true;
  };

  /**
   * 石が置けるかどうか
   */
  const puttable = (x: number, y: number, board: ICell): boolean => {
    // 指定座標に既に値があった場合

    console.log(x, y);
    console.log(board);

    return true;
  }
}
