// js/crud.js
function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * 1000);
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
}

function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
