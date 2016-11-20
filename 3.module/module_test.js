//a相当于module.exports
//b相当于exports
//1.将属性挂载在exports对象上，可以通过module.exports拿到
//2.将exports对象直接指向一个新的空间，不会影响module.exports的值
//3.如果直接把module.exports改变，最后导出module.exports对象那肯定会改变
var a = b = {};
b = 1;
console.log(a);
/*b.calc = 1;
console.log(a);*/
/*
(function (require,module,exports,__dirname,__filename) {
    this = exports = {}
    module.exports = exports = {};
    xxx.js
    return module.exports;
})();*/
