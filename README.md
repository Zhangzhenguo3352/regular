# regular
```
// 把地址栏中的 xxx=1000,拿出来
var str = 'http://weibo.com/ttarticle/p/show?id=230&name=333&app=222';
var reg = /([^?=&]+)=([^?=&]+)/g;
var res = reg.exec(str);
var json = {};
while(res){

  json[res[1]] = res[2];
  res = reg.exec(str);
}
console.log(json)
// { id: '230', name: '333', app: '222' }

/*

* 出现零到多次
+     让前面的出现一到多次
？     让前面出现零次或者一次（可能出现，也可能不出现，但出现只有一次）
{n}     出现n次
{n,}     出现n到多次
{n,m}     出现n到m次

*/

```
```
// 模板引擎 { x } 初步原理
var str = 'my name is {0}, my age is {1}, i come from {2}, i love {3}';
var arr = ['张振国','26','china','javascript'];

str = str.replace(/{(\d)}/g,function(){
  return arr[arguments[1]]
  // return arr[RegExp.$1]  珠峰说一样，但我没有实现，一样的代码，为什么我的不行
})
console.log(str)
// my name is 张振国, my age is 26, i come from china, i love javascript

```
```
// 字符串中字母 出现的字母最多的是哪个，最多的出现几次
var str = 'zhangzhenguohaohaoxxixisdwodAEEFErjjd';
var reg = /[a-z]/gi; // i 忽略了大小写
var json = {};
// 1，获取 每一个字符串 出现的次数
str = str.replace(reg,function(){

  json[arguments[0]] >=1?json[arguments[0]] += 1:json[arguments[0]] = 1

  // if(json[arguments[0]] >=1){
  //   // json[arguments[0]] = 1+json[arguments[0]]
  //   json[arguments[0]] += 1
  // }else{
  //   json[arguments[0]] = 1
  // }

  /*
  {z: 2,h: 4,a: 3,n: 2,g: 2,e: 1,u: 1,o: 4,x: 3,i: 2,s: 1,d: 3,w: 1,j: 3,r: 1}
  */
})
// 2, 获取 出现最多 哪个数 是哪个
var maxNum = 0;
for(var key in json){
  json[key]>maxNum?maxNum=json[key]:null;
}
// console.log(maxNum)
// 3 为了避免一样的数，一样的出现次数，不能同时拿到，写一个符合maxNum次数的都获取到
var arr = [];
for(var key in json){
  json[key] === maxNum?arr.push(key):null;
}

console.log('出现最多的字母是'+arr+',出现的次数是'+maxNum+'次！')
//出现最多的字母是h,o,出现的次数是4次！

```
```
var str = '20151219';
var ary = ['零','壹','贰','叁','肆','伍','陆','柒','捌','九'];
var reg = /\d/g;
str = str.replace(reg,function(){
  // var num = arguments[0];
  // var str2 = ary[num];
  // return str2;

  return ary[arguments[0]]
})
console.log(str) // 贰零壹伍壹贰壹九

```
```

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

```
```
// replace() 第二个参数换成一个函数
var str = 'zhang123zhang345';
var reg = /zhang/g ;

str = str.replace(reg,function(){
	console.log(arguments);
	//{ '0': 'zhang', '1': 0, '2': 'zhang123zhang345' }
	//{ '0': 'zhang', '1': 8, '2': 'zhang123zhang345' }

	return 'zhangzhenguo'
})

// 第二个参数换成一个函数 得到什么：
	/*
		1, 正则捕获两次，匿名也执行两次
		2, 每一次执行的匿名函数，里面传递的参数（arguments）和我们自己通过exec捕获到的结果 非常类似的
		3, return 'xxx' 你要替换成什么
	*/
```
```
// replace()  替换
var str = 'zhang123zhang456';
str = str.replace(/zhang/g,'zhangzhenguo');
console.log(str) // zhangzhenguo123zhangzhenguo456
```
```
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

```
