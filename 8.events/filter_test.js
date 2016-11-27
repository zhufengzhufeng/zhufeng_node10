var arr = [1,2,3,4,5,6,7,8,4];
var newArr = arr.filter(function (item) {
    //如果返回true保留
    return item != 4
});
console.log(newArr);
