// 验证年龄限制 18-65中间正则

// 这样考虑问题 18-19 20-59 60-65

var reg = /^(1[8-9]|[2-5]\d|6[0-5])$/;
console.log(reg.test('1')) // false
console.log(reg.test('17')) // false
console.log(reg.test('66')) // false
console.log(reg.test('555')) // false

console.log(reg.test('18')) // true
console.log(reg.test('55')) // true
console.log(reg.test('65')) // true






