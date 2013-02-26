var reTest = /(a{2}|b{2})/igm;
var str = '76342bbjkhjkaa78935jhjaajkhjkhdf4534aakjgk43o5';

var result;
// = reTest.exec(str);
//console.log(result.index);

do{
	result = reTest.exec(str);
	if(!result)break;
	console.log(result.index);
}while(result);

//console.log('end');