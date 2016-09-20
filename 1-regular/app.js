var reg = /\d/; // 包含一个 0-9 之间的数字
console.log(reg.test('zhang')) // false
console.log(reg.test('zhang123')) //true
console.log(reg.test('1')) // true
