//��д���ļ�,����ÿ�δ�СΪ40k.
//����?��������ٶ���,����ô�����?
 var fs = require('fs');
 var filename = 'd:/temp/JavaScript-Core-and-Practice-V0.9.9b.pdf';
 var count = 0;
 var readstream = fs.createReadStream(filename);
    readstream.on('data', function(chunk) {
    	var lcount = count ++;
        console.log('on ', lcount);
        //process.stdin.resume();
        for(var i=1; i<100; i++){
        	var content = fs.readFileSync(filename);
        	fs.writeFileSync('d:/temp/1.pdf',content);
        }
        console.log('on  completed',lcount);
        //req.write(chunk);
    });
    readstream.on('end', function() {
        //req.end();
        console.log('stream closed!')
    });
    
//http://www.cnblogs.com/fengmk2/archive/2011/08/16/2140460.html
//node��д���ļ�    