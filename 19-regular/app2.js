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
