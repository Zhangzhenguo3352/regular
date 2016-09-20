// 分组引用
//  \1  和 第1个 分组 一模一样
//  \2  和 第2个 分组 一模一样
//  \3 ... 
var reg = /(\w)\1(\w)\2/;

console.log(reg.test('zz00')) // true