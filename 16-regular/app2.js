// exec 和 match() 区别
var reg = /zhang(\d+)/g ;

var str = 'zhang123zhang345zhang456';
// exec 不仅能够把 大正则捕获到，分组也能捕获到

// console.log(reg.exec(str)) // [ 'zhang123', '123',... ]
// console.log(reg.exec(str)) // [ 'zhang345', '345',... ]
// console.log(reg.exec(str)) // [ 'zhang456', '456',... ]
// console.log(reg.exec(str)) // null

// match() 只能捕获大正则内容
console.log(str.match(reg)) // [ 'zhang123', 'zhang345', 'zhang456' ]
