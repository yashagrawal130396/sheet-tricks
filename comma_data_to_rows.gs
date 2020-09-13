function commaids() {
  var ss = SpreadsheetApp.openById('SHEET_ID');
  var sheet2 = ss.getSheetByName('SHEET_NAME');
  var lC = sheet2.getLastColumn();
  var lR = sheet2.getLastRow();
  for(var i=6; i<lC; i++) {
  //accessing comma data split columns
    var nR = getNextRowcomma(sheet2,i,lR);
    if(nR < 2) continue;
    var range = sheet2.getRange(2, i, nR-1, 1).getDisplayValues();
    var pastenR = getNextRowcomma(sheet2,lC,lR)+1;
    sheet2.getRange(pastenR, lC, range.length, range[0].length).setValues(range);
    }
}

function getNextRowcomma(sheet2,num_col,lR) {
  var firstblank = sheet2.getRange(1, num_col, lR, 1).getValues();
  for (var i in firstblank) {
    if(firstblank[i][0] == "") {
      return Number(i);
      break;
    }
  }
}
