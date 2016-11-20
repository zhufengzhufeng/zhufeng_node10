//不用声明可以直接使用的对象
//console.log(global);
//1.console
//console.error('error');//输出错误
//console.warn('warn');//输出警告
//console.log('log'); //输出日志
//console.info('info'); //输出信息
//输出顺序是不确定的
/*var timer = new Date().getTime();
for (var i = 0; i<1000000;i++){}
var timer1 = new Date().getTime();
console.log(timer1-timer);*/
//console.time('start1');//时间，计算代码执行的时间
//setTimeout(function () {console.timeEnd('start1');},2000)
//打印time开始到timeEnd结束中间的时间,参数可以自定义，但是要保证一致
//2.__filename,__dirname 并且不是global上的属性
//console.log(__filename); //当前文件的绝对路径
//console.log(__dirname); //当前文件所在的文件夹的绝对路径
//文件外套了一层函数，他里面包含了一些形参，是这个函数的形参
/*
(function (require,module,exports,__filename,__dirname) {
    //3.global_obj.js
})()
*/
//3.setTimeout 定时器,this不是global
/*function sum(a,b) {
    console.log(a+b);
}
setTimeout(sum,1000,1,2); //可以将参数从第三位开始传入*/
/*
setTimeout(function () {
    console.log(this);
},1000);
*/
//4.setImmediate 立即 和setTimeout一样是一个异步方法
// - 不能指定时间
// - 如果setTimeout不指定时间，setImmediate还是给setTimeout一些机会的
setImmediate(function () {
    console.log('马上');
});
setTimeout(function () {
    console.log('setTimeout');
},0);
//5.process 进程
//pid进程的id号 kill杀死进程
//setInterval(function () {},20000); //代码不执行完进程就不会结束
console.log(__dirname); //传入的形参
console.log(process.cwd());//current working directory;
process.chdir('..');//change directory; __dirname的值不会更改
process.nextTick();//下一队列
//nextTick是一个异步方法，他比setTimeout和setImmediate更早些

//process 进程
//Buffer 缓存
//setImmediate 立即
//setInterval
//setTimeout
