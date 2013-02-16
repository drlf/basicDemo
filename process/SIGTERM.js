//一个给自己发送信号的示例：
//运行不成功，系统提示不存在的sign


process.on('SIGUSR1', function () {
  console.log('Got SIGHUP signal.');
});

setTimeout(function () {
  console.log('Exiting.');
  process.exit(0);
}, 1000);

process.kill(process.pid, 'SIGUSR1');