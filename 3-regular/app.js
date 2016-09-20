var reg = /^\d$/; // 开头是 0-9 的数，结尾是 0-9 的数， 只能是 。。。。
console.log(reg.test('9')) // true 只能是 一个 0-9 数字
console.log(reg.test('234')) // false 只能是 一个 数字,它是 多个数字
*
