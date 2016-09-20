
var reg = /(\d+)/g ;
var str = 'zhang123zhang234zhang345';

str = str.replace(reg,function(){
  console.log(arguments)
  /*
  { '0': '123',
  '1': '123',
  '2': 5,
  '3': 'zhang123zhang234zhang345' }
{ '0': '234',
  '1': '234',
  '2': 13,
  '3': 'zhang123zhang234zhang345' }
{ '0': '345',
  '1': '345',
  '2': 21,
  '3': 'zhang123zhang234zhang345' }
  */
  return 1
})
console.log(str)  // zhang1zhang1zhang1
/*

{
  '0': '123',
  '1': '123',
  '2': 5,
  '3': 'zhang123zhang234zhang345'
}

*/
// 0 -> 大正则捕获的
// 1 -> 分组捕获的
// 2 -> 从哪个索引捕获的
// 3 -> 要捕获哪个 字符串
