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
	*/