// 如何解决正则 懒惰性
// 当不知道 要捕获多少次 时怎么操作
var reg = /\d+/g;
var str = 'zhang2001zhen2001guo2003woowoowoo2004';
var arr = [];
var res = reg.exec(str);
while(res){ // 正则匹配时是 true，也就是字符串有匹配的内容， 不进入循环时是 null ,也就不会循环
	arr.push(res[0]);
	res = reg.exec(str); // 正则捕获到了，往下一个继续捕获，循环，直到，捕获不到为null,不循环
}
console.log(arr) //[ '2001', '2001', '2003', '2004' ]
























