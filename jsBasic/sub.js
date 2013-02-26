module.exports = function(name){
	this.name = name;
	this.print = function(){
		console.log('my name is ',name);
	}
}