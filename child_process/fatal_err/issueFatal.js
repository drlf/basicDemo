console.log('opened!');
var i=9/0;
console.log(i);

//运行命令
//node --max-old-space-size=1 issueFatal
//改小启动内存数，以提前引发out of memory错误。
