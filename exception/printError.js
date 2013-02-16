
process.on('error',function(err){
	//console.log('process error....');
	console.log(err.message);
});

function funa(){
	console.log('funa running....');
	throw new Error('fdsf');
	
	console.log('funa continue...');
}

try{
funa();
}catch(err){
	console.log(err.message);
}