// match 字符串 方法，把所有正则匹配的字符串都获取到

var reg = /\d+?/g ;
var str = 'zhang23zheng456guo789ssd012';
var res = str.match(reg);
console.log(res) // [ '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2' ]

// 去掉 ？  号

var reg2 = /\d+/g ;
var str2 = 'zhang23zheng456guo789ssd012';
var res2 = str2.match(reg2);
console.log(res2) // [ '23', '456', '789', '012' ]
