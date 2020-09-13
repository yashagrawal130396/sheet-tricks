function wholedata() {
  SpreadsheetApp.flush();
  var ss = SpreadsheetApp.getActiveSpreadsheet().getNumSheets();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[DESTINATION_SHEET_INDEX];
  var allreviews = [];
  for(var i=0; i<DESTINATION_SHEET_INDEX; i++) {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()[i];
    var nR = getlastrow(sheets, 1);
    if(nR == 0) continue ;
    var revrange = sheets.getRange(2, 1, nR, 5).getValues();
    for(var j in revrange) {
      var col1 = revrange[j][0];
      var col2 = revrange[j][1];
      var col3 = revrange[j][2];
      var col4 = revrange[j][3];
      var col5 = revrange[j][4];
      var sheetreviews = [[col1],[col2],[col3],[col4],[col5]];
      allreviews.push(sheetreviews);
    }
  }
  var uniquerev = ArrayLib.unique(allreviews, 0, false);
  var sortedreviews = ArrayLib.sort(uniquerev, 0, true);
  sheet.getRange("A2:I").clearContent();
  sheet.getRange(2, 1, sortedreviews.length, sortedreviews[0].length).setValues(sortedreviews);
}


function getlastrow(sheets, col) {
  var range = sheets.getRange(2, col, sheets.getLastRow()+1, 1).getValues();
  for(var i in range) {
    if(range[i][0] == '')
      break;
  }
  Logger.log(Number(i));
  return Number(i);
}
