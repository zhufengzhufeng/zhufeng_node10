var fs = require('fs');
var rs = fs.createReadStream('./name.txt',{highWaterMark:3});
var str = '';
rs.on('data',function (data) {
    str+=data;
    console.log(str);
    rs.pause(); //暂停触发data事件
    setTimeout(function () {
        rs.resume(); //再次出发data事件
    },1000);
});
//只有读完后才会触发end
rs.on('end',function () {
    console.log(str);
});