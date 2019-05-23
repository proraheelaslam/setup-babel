"use strict";

var data = [{
  "col1": "value1",
  "col2": "value1",
  "col3": "value1"
}, {
  "col1": "value2",
  "col2": "value2",
  "col3": "value2"
}, {
  "col1": "value3",
  "col2": "value3",
  "col3": "value3"
}];
var db;
var transaction = db.transaction([STORE], IDBTransaction.READ_WRITE);
var objstore = transaction.objectStore(STORE);

for (i = 0; i < data.length; i++) {
  objstore.put(data[i]);
}