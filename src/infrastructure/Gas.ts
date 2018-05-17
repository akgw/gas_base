export namespace Gas {

  export const fetchCell = async () => {
    let hoge = 'aaa';

    hoge = await google.script.run
      .withSuccessHandler( (value) => {
        hoge = value;
        return hoge;
      }).sendFetchCell('board', 0, 0);
    console.log(hoge);

//    return hoge;
  }
}
