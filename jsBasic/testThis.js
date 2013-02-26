var sm = require('./testThis_module');

function newThis(){
	return 	new (require('./testThis_module'))('drlf');
}


//var t = new (require('./testThis_module'))('drlf');
var t = ne newThis();

//console.dir(t);
//t.show();
t.print();
