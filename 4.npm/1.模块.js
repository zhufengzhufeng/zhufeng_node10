// 文件模块 ./
// 第三方模块 下载后直接引用
// 核心模块 例如http url fs path 直接引用
//核心模块
var util = require('util');//node给我们提供的一个自带的工具包
//util中有一个继承的方法
function A() {
    this.sleep = '睡觉'
}
A.prototype.eat = function () {console.log(1);};
function B() {}
//B.prototype = new A();//实例继承 //call继承
//原型链继承
//B.prototype.__proto__ = A.prototype;
//B.prototype = Object.create(A.prototype);
//Object.setPrototypeOf(B.prototype,A.prototype);
util.inherits(B,A); //node中inherits为原型链继承
var b = new B();
b.eat();
console.log(b.sleep);
//判断类型的方法
util.isArray();
util.isBoolean();
util.isDate();
util.isObject();

