var childProcess = require('child_process');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

console.log('start');
spawn('dir',null,{ stdio: [ 'ignore', process.stdout, process.stderr ]});
// ls = childProcess.exec('cls');

 console.log('end');