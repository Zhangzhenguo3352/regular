
var reg = /^0.2$/ ; // 只能是 以0开头  以2结尾，中间除了 \n 以外的任意字符
console.log(reg.test('0.2')); // true
console.log(reg.test('0-2')); // true

var reg2 = /^0\.2$/ ; //加了转义 只能代表一个点。 匹配 以0开头 以2结尾 中间是点
console.log(reg2.test('0.2')); // true
console.log(reg2.test('0-2')) // false

/*

\     转义字符、转义
^     以某一个元字符开始
$     以某一个元字符结尾
\n     匹配一个换行符
.     点，除了 \n 以外的任意字符

*/
