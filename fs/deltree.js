/**
 * 删除目录树，解决因文件名/目录过长，使用windows系统普通方法难以删除的问题(出现在npm install 循环引用)
**/
var fs = require('fs');
var path = require('path');

//fs.rmdirSync(path)
//fs.renameSync(oldPath, newPath)

var dirName = '2';
function deltree(dir){
	var files = fs.readdirSync(dir);
	if(files && files.length>0){
		
		files.forEach(function(file){
     var filepath = dir + path.sep + file;
		 if(fs.statSync(filepath).isDirectory())
		 	deltree(filepath);
		 else
		 	fs.unlinkSync(filepath);
		});
		
	}
	fs.rmdirSync(dir);
}

deltree('./1');
