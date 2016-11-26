//path也是一个核心模块
var path = require('path');
//一般情况下我们会以一个相对路径来解析出一个绝对路径
//1.将多个路径拼到一起
console.log(path.join(__dirname,'..','/a.js'));
//2.解析绝对路径,通过不存在的文件名解析一个绝对路径
console.log(path.resolve('a.js'));




//writeFile writeFileSync 写文件
//readFile readFileSync 读文件
//mkdir mkdirSync 创建目录
//rmdir rmdirSync 删除目录
//exists existsSync 判断文件是否存在
//readdirSync readdir 读取目录
//stat statSync 读取文件的状态
//isDirectory() isFile() 判断文件类型
//unlink unlinkSync 删除文件
//path.join 拼接路径  path.resolve 解析路径