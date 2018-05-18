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
function sendReadCell(sheetName, x, y) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  return sheet.getRange(x + y).getValue();
}

/**
 * シートの指定座標のデータを複数取得
 *
 * @param sheetName
 * @param fromX
 * @param fromY
 * @param toX
 * @param toY
 * @returns {Object[][]}
 */
function sendReadRangeCell(sheetName, fromX, fromY, toX, toY) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  return sheet.getRange(fromX + fromY + ":" + toX + toY).getValues();
}

/**
 * シートの指定座標の値を更新
 *
 * @param sheetName
 * @param x
 * @param y
 * @param value
 */
function sendWriteCell(sheetName, x, y, value) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  sheet.getRange(x + y).setValue(value);
}

/**
 * シートの指定座標の値を複数更新
 *
 * @param sheetName
 * @param array
 * @param minX
 * @param maxX
 */
function sendWriteRangeCell(sheetName, array, minX, maxX) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);

  for (var y in array) {
    var range = sheet.getRange(minX + y + ":" + maxX + y);

    range.setValues([array[y]]);
  }
}

/**
 * シートを初期化する
 *
 * @param sheetName
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function sendClearSheet(sheetName) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  return sheet.clear();
}