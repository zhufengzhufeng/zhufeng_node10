/*
* buffer 声明时要拥有固定的长度
* */
//3种声明方式
//1通过长度来创建buffer
var buffer = new Buffer(3); //随机在我们内存中拿出三个地方
buffer.fill(0);//手都清空内存
//如果大于255 则对256取模
//如果为负的 会在256基础上+负值
console.log(buffer);
//2.通过数组的方式创建
var buffer = new Buffer([200,2,3]);//给buffer中每一项都为固定的值
console.log(buffer);
//将10进制除以进制取余数  将10进制转换成任意进制
//3.字符串创建
var buffer = new Buffer("珠峰");
console.log(buffer);
//特点
var str = '珠峰';
str[0] = '峰';
console.log(str); //字符串具有不变性
//数组 slice克隆一个新的数组
var a = [1];
var arr = [a,2,3]; //数组里存储的是地址
var newArr = arr.slice();
a[0] = 100;
console.log(newArr);
//buffer中的slice 不会生成新的内存
var buffer  = new Buffer('珠峰');
var newBuffer = buffer.slice(buffer.length-1);//newBuffer等于buffer中某一段
newBuffer[0] = 100;
console.log(buffer);
//通过索引拿去buffer的某一项都是10进制的
buffer.forEach(function (item) {
    console.log(item);
});
//buffer转换成字符串
buffer[buffer.length-1] = 0xb0;
console.log(buffer.toString('utf8',3,6)); //从那一位转换到哪一位结束
//slice forEach toString();
var buffer = new Buffer('珠峰');
var str = '珠峰';
//buffer的长度和字符串的长读不相等
console.log(buffer.length == str.length);

//因为buffer是在global上定义的所以可以直接访问
console.log(global.Buffer);
