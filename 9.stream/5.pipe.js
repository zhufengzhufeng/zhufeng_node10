//1.默认读取 64k 4k
//2.默认写入16k  1k
//1000k   16+48+64    +900k
//       16+64+48
//读一会  写一会，等写完后再去读
//拼命的读，写不进去的仍地下

// ws = createWriteStream  rs = createReadStream
// rs.on('data')=>rs.pause()=>ws.write()=>ws.drain()=>rs.resume()=>rs.end()=>ws.end();
var fs = require('fs');
var rs = fs.createReadStream('./name1.txt',{highWaterMark:4});
var ws = fs.createWriteStream('./name.txt',{highWaterMark:1});
