import {Gas} from "../infrastructure/Gas";

export namespace Turn {
  export const fetch = async () => {
    const ret = await Gas.fetchCell();

    console.log(ret);
  }
}
