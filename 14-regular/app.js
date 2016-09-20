
// 如何利用懒惰性 一个一个 捕获 ,加 ?
var reg = /\d+?/g;
var str = 'zhang23zhen456guo789drcss';
var res = reg.exec(str);
var arr = [];
while(res){
	arr.push(res[0]);
	var res = reg.exec(str);
}
console.log(arr) // [ '2', '3', '4', '5', '6', '7', '8', '9' ]