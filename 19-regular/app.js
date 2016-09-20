// 模板引擎 { x } 初步原理
var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}';
var arr = ['张振国','26','china','javascript'];

str = str.replace(/{(\d)}/g,function(){
  return arr[arguments[1]]
  // return arr[RegExp.$1]  珠峰说一样，但我没有实现，一样的代码，为什么我的不行
})
console.log(str)
// my name is 张振国, my age is 26, i come from china, i love javascript
