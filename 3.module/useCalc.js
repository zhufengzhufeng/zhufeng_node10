//文件模块
var calc = require('./calc');//引用的是文件类型，所以使用相对路径
// 默认+js后缀找，找不到+json
//require最终拿到的就是module.exports
console.log(calc); //{calc:calc} = exports = calc
//require后返回的结果并不是exports对象
//require后返回的结果是module.exports
//require是一个同步方法，他相当于，把另一个文件读取过来放到当前文件下执行