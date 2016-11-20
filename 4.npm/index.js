//引用第三方别人发布上去的包，会自动在当前目录下node_modules下找对应的packakge.json文件中对应main文件,默认是index.js，如果找不到，会向上级找根目录，找不到则报错
var baobao = require('baobao');

require('dengxirui-node');

console.log(module.paths);//模块的查找路径

//npm node package manager 管理后台的文件，后台里能使用jq吗
//bower 管理前台文件