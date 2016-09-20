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
