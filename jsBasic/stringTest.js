
/**
 * split һ���᷵������,�������:�ָ�������Ĭ�Ϸ��طָ�����Ĳ����ִ�
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