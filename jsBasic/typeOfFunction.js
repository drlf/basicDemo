

function sub(){
	console.log('sub....');
}

var s = sub;
if(typeof s == "function")s();