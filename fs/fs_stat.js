var fs = require('fs');

var filename = "d:\\FailQueue-1360590524453.dmp";
var t= fs.statSync(filename);
console.log(t.size);