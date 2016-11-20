setImmediate(function () {
    console.log('扫地去');
});
console.log(1);
process.nextTick(function () {
    console.log('买包去');
});
setTimeout(function () {
    console.log('休息');
},0);
// 同步方法 > process.nextTick > setImmediate > setTimeout > 异步io