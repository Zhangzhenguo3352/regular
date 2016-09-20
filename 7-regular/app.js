
var reg = /^\d+zhang\d+$/ ; // 只能是 以0-9开头 以0-9结尾 中间是zhang
console.log(reg.test('2016zhang2016')) // true

var reg2 = /^(\d+)zhang(\d+)$/;// 加了 括号 只是 分成 两组
console.log(reg2.test('22zhang22')) //true

/*

\     转义字符、转义
^     以某一个元字符开始
$     以某一个元字符结尾
\n     匹配一个换行符
.     点，除了 \n 以外的任意字符
()     分组，大的 分成一个一个小的

*/
