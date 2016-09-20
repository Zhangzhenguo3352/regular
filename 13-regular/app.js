// 如何解决正则 贪婪性  加 ？

var reg = /\d+?/g ;
var str = 'zhang0222zhen2016guo333';
var res = reg.exec(str);
console.log(res) // [ '0', index: 5, input: 'zhang0222zhen2016guo333' ]
console.log(res) // [ '0', index: 5, input: 'zhang0222zhen2016guo333' ]
console.log(res) // [ '0', index: 5, input: 'zhang0222zhen2016guo333' ]
console.log(res) // [ '0', index: 5, input: 'zhang0222zhen2016guo333' ]
console.log(res) // [ '0', index: 5, input: 'zhang0222zhen2016guo333' ]


































