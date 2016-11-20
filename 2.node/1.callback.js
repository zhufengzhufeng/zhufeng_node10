function read(callback) {
    var a =1 ;
    setTimeout(function () {
        console.log('读好了');
        callback();
    },5000);
    return a;
}
function write() {
    console.log('写好了');
}
var result = read(write);
console.log(result);
// 同步的可以马上拿到返回值，异步函数都有回调函数

//异步同步  针对主线程
//阻塞 非阻塞  针对内核
//io 文件的操作
//单线程和多线程  针对当前进程来说的
//事件环 当前和下一次小本


