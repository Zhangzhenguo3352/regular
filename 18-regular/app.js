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
