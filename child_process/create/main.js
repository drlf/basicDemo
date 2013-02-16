var util = require('util'),
		cp = require('child_process'),
		spawn = require('child_process').spawn;

//运行dir命令不成功，返回错误：CreateProcessW,考虑用exec来执行。
//child = spawn('dir', []);
//运行node sunVlass成功，但是输出不知道转哪里去了。

var options = {
	customFds: [-1,1,-1],
	setsid: true
	};
	
child = spawn('node', ['subClass'], options);
ws = spawn('node', ['helloWorldWS'], options);
if(!child){
	console.log('e......');
	process.exit(0);
}
/*
child.stderr.on('data', function (data) {
    console.log('Failed to start child process. ' + data);
});


child.stdout.on('data', function (data) {
  console.log(data);
});
*/

child.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});