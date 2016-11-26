//forEach slice toString()

//1.write像buffer中写入内容
var buffer = new Buffer(12);
var str = '珠';
var str1 = '峰培训';
//string,写入的内容
//offset 写入的偏移量 默认从0开始
//length,写多少个  可以不写，默认全部写入
//encoding,写入的编码格式  默认是utf8
buffer.write(str);
buffer.write(str1,3);
console.log(buffer.toString());
//2.copy将内容拷贝到buffer中
var buffer = new Buffer(12);
var buf1 = new Buffer('珠');
var buf2 = new Buffer('峰培训');
// targetBuffer, 目标buffer
// targetStart, 目标的开始
// sourceStart, 源的开始
// sourceEnd 源的结束
buf1.copy(buffer,0);
buf2.copy(buffer,3);
console.log(buffer.toString()); //像buffer中写入内容时要注意偏移量的设置
//concat连接多个buffer