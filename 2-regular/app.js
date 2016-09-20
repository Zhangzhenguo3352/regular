var reg = /\d/; //
// exec  正则捕获使用
console.log(reg.exec('zhang')); // null
console.log(reg.exec('1')) // [ '1', index: 0, input: '1' ]
console.log(RegExp.prototype)
