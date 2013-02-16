
process.on('dowork',function(){
	console.log('process dowork....');
});
function funa(){
	console.log('funa running....');
	//throw new Error('fdsf');
	process.emit('dowork');
	process.nextTick(function(){
		process.emit('dowork');
	});
	
	console.log('funa continue...');
}

funa();