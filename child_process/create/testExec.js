var util   = require('util'),
    exec  = require('child_process').exec,
    child;

//��֪������ʲôencoding��ֱֻ����utf8
child = exec('dir', //{ encoding: 'GB2312'},
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});