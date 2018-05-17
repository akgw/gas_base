function doGet(e) {
  Logger.log(e);
  var template = HtmlService.createTemplateFromFile('index');
  return template.evaluate()
}

/**
 * シートの指定座標のデータを単一取得
 *
 * @param sheetName
 * @param x
 * @param y
 * @returns {Object}
 */
function sendFetchCell(sheetName, x, y) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  return sheet.getRange(convertX(x) + convertY(y)).getValue();
}

/**
 * シートの指定座標のデータを複数取得
 *
 * @param sheetName
 * @param fromX
 * @param fromY
 * @param toX
 * @param toY
 * @returns {Range}
 */
function sendFetchRangeCell(sheetName, fromX, fromY, toX, toY) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  return sheet.getRange(convertX(fromX) + convertY(fromY) + ":" + convertX(toX) + convertY(toY)).getValues();
}

/**
 * シートの指定座標の値を更新
 *
 * @param sheetName
 * @param x
 * @param y
 */
function sendPutCell(sheetName, x, y, value) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  sheet.getRange(convertX(x) + convertY(y)).setValue(value);
}

/**
 * シートの指定座標の値を複数更新
 *
 * @param sheetName
 * @param array
 */
function sendPutRangeCell(sheetName, array, minX, maxX) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

  for (var y in array) {
    var range = sheet.getRange(convertX(minX) + convertY(y) + ":" + convertX(maxX) + convertY(y));

    range.setValues([array[y]]);
  }
}

/**
 * yを変換
 *
 * @param y
 * @returns {number}
 */
function convertY(y) {
  return parseInt(y) + 1;
}

/**
 * xを変換
 *
 * @param column
 * @returns {*}
 */
function convertX(x) {
  const convertForSheet = {
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    4: 'E',
    5: 'F',
    6: 'G',
    7: 'H',
  };

  return convertForSheet[x];
}
