console.log(this); //直接访问this是{}
(function () {
    console.log(global===this);
})();
//在文件中直接访问this this就不是global 因为文件外套了一层函数，在函数中改变了this指向
var a = 100;
console.log(global.a); //undefined,用var来定义的变量不会声明global上