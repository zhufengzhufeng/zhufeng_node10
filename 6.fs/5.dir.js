var fs = require('fs');

//读取儿子辈的
var arr = fs.readdirSync('./a');
console.log(arr);//默认是数组类型
//判断文件的状态
var result = fs.statSync('./1.fs.js');
console.log(result.isDirectory());//否是文件夹
console.log(result.isFile());
/*
atime: 2016-11-26T09:06:26.513Z, access time 访问的时间
mtime: 2016-11-26T09:06:26.513Z, modify time 修改时间  修改了变化
ctime: 2016-11-26T09:06:26.513Z, change time 改变时间  有变化
birthtime: 2016-11-26T08:59:57.496Z 出生时间
*/
console.log(result);
var items = fs.readdirSync('a');
items.forEach(function (item) {
    var stat = fs.statSync('a/'+item);
    if(stat.isFile()){//判断是否是文件
        fs.unlinkSync('a/'+item);//删除文件
    }
    if(stat.isDirectory()){//判断是否是文件夹
        fs.rmdirSync('a/'+item);//删除文件夹
    }
});