//将10个数写入到一个文件内

var fs = require('fs');
var ws = fs.createWriteStream('./name1.txt',{highWaterMark:1});
var i = 0;
function write() {
    var flag = true;
    while(flag&&i<10){
        var flag = ws.write(i+++'');
    }
    if(i==10){
        ws.end();
    }
}
write();
ws.on('drain',function () {
    console.log('干了');
    write();
});

//用1b来完成后这件事
