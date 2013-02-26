

function getId(){
	return Date.now();
}

function write2File(id){
	console.log('writing...',id);
}

function test(){
	var curId, newId;
	for(var i=0;i<100;i++){
		newId = getId();
		//if(newId == curId)console.log('错误,2个相同的id. ', curId);
		write2File(newId);
		curId = newId;
	}
}

test();
