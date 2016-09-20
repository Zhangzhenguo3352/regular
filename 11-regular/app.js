
// 去除惰性查找，改用全局查找

	//原来：加了全局修饰符 g ,正则每一次捕获结束后，我们的lastIndex的值都变为最新的值，
	//下一次捕获从最新的位置开始查找，这样可以把所有需要捕获的内容都捕获到了
var reg = /\d+/g ;

var str = 'zhang22222zhenguo33333';

console.log(reg.lastIndex);	// 0
console.log(reg.exec('zhang22222zhenguo33333')); //[ '22222', index: 5, input: 'zhang22222zhenguo33333' ]

console.log(reg.lastIndex);  // 10
console.log(reg.exec('zhang22222zhenguo33333'));  //[ '33333', index: 17, input: 'zhang22222zhenguo33333' ]





