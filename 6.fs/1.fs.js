//node中的核心模块 file system
var fs = require('fs');
//读取 写入 同步和异步同时出现
//有没有返回值 有没有回调函数
//fs.readFile(); //异步方法
//fs.readFileSync();//同步方法
//默认读取内容为buffer类型
//var name = fs.readFileSync('./name.txt',{flag:'r',encoding:'utf8'});
//默认类型为r
//默认编码格式buffer
//var name = fs.readFileSync('./name.txt','utf8');//指定编码格式为utf8类型
fs.readFile('./name1.txt',function (err,data) { //error first
    console.log(arguments);
});
//console.log(name);