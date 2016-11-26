//base64 就是进制的转换，他不是加密算法
//md5 sha1 sha256

//parseInt 将任意进制转换成10进制
parseInt("111",2); //括弧内放的是当前是什么进制
console.log(parseInt("111",2));
//把16进制的10转换成10进制
console.log(parseInt("20",16)); //前面编码格式必须是字符串类型
//toString 将任意进制转换成任意进制
console.log((0xff).toString(2));

//如何将一个汉字转换成base64编码
//二进制转换成10进制最大的值不能超过64  00111111 永远不会大于64 0-63之间有64个数
//可见编码
var baseEncoding = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
baseEncoding+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
baseEncoding+="0123456789";
baseEncoding+="+/";  //=
//将一个汉字转换成不大于64的格式 去baseEncoding取值

var buffer = new Buffer('珠');
console.log(buffer); //珠的16进制
//1.将16进制转成2进制
console.log((0xe7).toString(2)); //11100111
console.log((0x8f).toString(2)); //10001111
console.log((0xa0).toString(2)); //10100000
//2.将3个八位 转换成 4个 6位前面补两个0
//00111001    00111000    00111110   00100000 这四个值永远不会大于63
//3.将转化后的值在转换10进制
console.log(parseInt('00111001',2));//57
console.log(parseInt('00111000',2));//56
console.log(parseInt('00111110',2));//62
console.log(parseInt('00100000',2));//32
//4.去baseEncoding中取值
console.log(baseEncoding[57]+baseEncoding[56]+baseEncoding[62]+baseEncoding[32]);//54+g => base64编码
//尝试写一个转base64的一个方法
