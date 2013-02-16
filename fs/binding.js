var fs = process.binding('fs');

//console.dir(fs);


var filename = "d:\\FailQueue-1360590524453.dmp";
var t= fs.stat(filename,function(err,t){
	console.log(t.size);
});

