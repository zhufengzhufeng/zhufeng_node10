//将10个数写入到一个文件内

var fs = require('fs');
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
for(var i = 0; i<10;i++){
    var flag = ws.write(i+'');
    console.log(flag);
}
//用1b来完成后这件事
