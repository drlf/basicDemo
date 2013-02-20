
/**
 * split 一定会返回数组,如果含有:分隔符，则默认返回分隔符后的部分字串
**/
function testSplit(srcString){
	if(!srcString)throw new Error('Empty String!');
	var contents = srcString.split(':');
	return contents.length>1 ? contents[1] : contents[0];
}
//console.log(testSplit('aaaaa:fsdfgg'));
//console.log(testSplit('432fsdf31fsdfgg'));
//console.log(testSplit(''));

function testReplace(srcString){
	//var re = /\s+/g;
	var re = /\"/g;
	//console.log(re.exec(srcString));
	return srcString.replace(re ,'');
}
console.log(testReplace('"fklsdjjkjl"'));
//console.log(testReplace('aaaaa: :fsdfgg'));