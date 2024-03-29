﻿var fs = require('fs'),
	buffer = require('buffer'),
	stream = require('stream');

var hugeFile = 'fsreadstream.js';

var buff = new Buffer(4);
var ui16 = new Uint16Array(buff);
var view = new DataView(buff);

ui16[0] = 1;
ui16[1] = 2;
console.log(buff);

view.setInt16(0, 1);       // set big-endian int16 at byte offset 0
view.setInt16(2, 2, true); // set little-endian int16 at byte offset 2
console.log(buff);
//啥是Uint16Array和DataView，DataView对通信组包很有用！

console.log(Buffer.isBuffer(buff));
//
var st = fs.createReadStream(hugeFile,{ encoding: 'ascii'});
st.on('data', function(chunk) {
	console.log(chunk);
});
st.on('open ',function(){
	console.log('stream open');
});
st.on('end', function() {
        //req.end();
        console.log('stream closed!')
    });
//fs.createReadStream('sample.txt', {start: 90, end: 99});