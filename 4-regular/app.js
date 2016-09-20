//出现 次数 的 量词 元字符
var reg = /^\d+$/; // 只能是 一到多次 数字
console.log(reg.test('12312323')) //true
console.log(reg.test('1')) //true
console.log(reg.test('1231zzz2323')) // false
/*

* 出现零到多次
+     出现一到多次
？     出现零次或者一次（可能出现，也可能不出现，但出现只有一次）
{n}     出现n次
{n,}     出现n到多次
{n,m}     出现n到m次

*/
