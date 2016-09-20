var name = 'zhang';
var reg = /^\d+"+name+"\d+$/g ; // 字面量方式，不能实现字符串拼接，
console.log(reg.test('2016zhang2016')) // false
console.log(reg.test('2016""nameeeee"2016')) // true

// 字符串拼接只能使用 实例创建的方式
var reg2 = new RegExp("^\\d+"+name+"\\d+$","g");
console.log(reg2.test('2016zhang2016'))   // true  ， 实现了字符串拼接

// 说明：字面量方式 和 实例创建的方式在正则中的区别
// 	1,字面量方式出现的一切都是元字符， 所以不能进行变量值的拼接，而实例的方式创建方式是可以的
// 	2,字面量方式中直接写 \d 就可以，而在实例中需要把它转移 \\d
/*

     * 出现零到多次
     +     让前面的出现一到多次     
     ？     让前面出现零次或者一次（可能出现，也可能不出现，但出现只有一次）
     {n}     出现n次

     {n,}     出现n到多次
     {n,m}     出现n到m次


*/