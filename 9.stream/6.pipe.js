var fs = require('fs');
function copy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws); //直接将可读流导入到可写流中
}
//会防止淹没可用内存，异步操作
copy('./name.txt','./name1.txt');
