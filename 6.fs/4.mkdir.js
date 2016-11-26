var fs = require('fs');
//创建目录必须要保证父级存在，不存在无法创建
function mkdirPath(p) {
    var aPath = p.split('\\');
    for(var i = 0;i<aPath.length;i++){
        //每次截取想要创建的路径
        var curPath = aPath.slice(0,i+1).join('\\');
        //如果文件已经存在，就不需要创建
        if(!fs.existsSync(curPath)){
            fs.mkdirSync(curPath);
        }
    }
}
//mkdirPath('a\\b\\c\\d');
//判断一个文件是否存在
var flag = fs.existsSync('a1');
console.log(flag);
//异步创建   循环创建需要递归



//作业：用异步的方式创建目录
fs.mkdir('a',function (err) {});
fs.exists('a',function (exists) {
    //exists 是否存在
});

