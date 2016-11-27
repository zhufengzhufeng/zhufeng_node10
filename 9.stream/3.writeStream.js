var fs = require('fs');
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
//默认写入的大小 highWaterMark:16384 = 16*1024
//写入的内容默认编码格式 utf8
//write end  response   on('data') on('end') request
var flag = ws.write('12',function () {
    console.log('写入成功');
}); //write和end中只能放入buffer或者字符串
//返回的是一个boolean类型，告诉内存还能不能再写进去了
console.log(flag);
/*ws.on('drain',function () { //抽干，干了
    console.log('干了');
});*/
ws.end('把之前的内容全部写入后再写的内容');//关闭掉，将内存中的内容全部写入
//ws.end('1');//如果写的内存已经关闭掉了，就不能在写入了
// write end drain
//1.喂我饭，会给个反馈，告诉你我是否还能不能吃
//2.如果吃不了就不要在喂我了，多余的部分仍地下
//3.等我吃完了，我把地下的在捡起来吃
//4.等在吃饭了，我消化好了再接着喂我

//1.write,end
//里面只能放字符串 end后不能再调用write方法
//2.drain方法，吃完了的方法
