/**
 * 测试domain.incerpt用法
 * 必须对每个函数显示调用d.incerpt(cb),对于cb内部嵌套的cb，不会自动incerpt，也就是不会自动接管传递给嵌套cb的err参数。
 * 接管了原该cb处理的err，所以cb不能带err参数。
 * 会处理cb内即内部嵌套cb内throw的error
 * 结论：
 * 如果错误(处理)机制比较复杂，还是不要用的好。
**/

var util = require('util');

domain =require('domain');

var d = domain.create();

d.on('error', function(e) {
    //console.log(util.inspect(e,true,null));
    console.log(e);
});

d.run(function () {
	funa('domain test', d.intercept(funb));
	//funa('domain test', funb);
	/*funa('domain test', d.intercept(function(result){
		console.log(result + '[funb handled]');
	}));*/
});


function funa(str, cb){
	var tmp = str+ '[funa handled]';
	console.log('funa running....');
	//var err = new Error('error throw from funa.');
	//var err = null;
	//cb(err, str + '[funa handled]', func);
	//cb(null, str + '[funa handled]', func);
	cb(null, tmp, func);
}

function funb(str, cb){
	//var newErr = new Error('error throw from funb.');
	//var err = null;
	//throw err;
	console.log(str+ '[funb handled]');
	cb(str + '[funb handled]');
	//cb(newErr, str + '[funb handled]');
}

function func(str){
	var err = new Error('error throw from func.');
	throw err;
	console.log(str + '[func handled]');
}
