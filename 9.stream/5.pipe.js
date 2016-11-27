//1.默认读取 64k 4k
//2.默认写入16k  1k
//1000k  16+48+64    +900k
//       16+64+48
//读一会  写一会，等写完后再去读
//拼命的读，写不进去的仍地下

// ws = createWriteStream  rs = createReadStream
// rs.on('data')=>rs.pause()=>ws.write()=>ws.drain()=>rs.resume()=>rs.end()=>ws.end();
var fs = require('fs');
var rs = fs.createReadStream('./name1.txt',{highWaterMark:4});
var ws = fs.createWriteStream('./name.txt',{highWaterMark:1});
rs.on('data',function (data) {
    var flag = ws.write(data); //像可写流中写入内容
    if(!flag){ //如果无法写入
        rs.pause(); //先不读了
    }
});
ws.on('drain',function () {//写完后，触发的事件
    console.log('干了');
    rs.resume();//恢复可读流
});
rs.on('end',function () {//读取完成后，将可写流关闭
    ws.end();//调用end会将内存中的所有内容写入到文件内
});
//边读边写