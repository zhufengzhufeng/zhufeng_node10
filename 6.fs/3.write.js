var fs = require('fs');
//异步可以通过回调函数中的err捕获错误，同步try catch
//fs.writeFileSync('./name1.txt', JSON.stringify({"name": 1}));
//fs.appendFileSync('./name1.txt',JSON.stringify({"name":1}));
//默认编码格式utf8,存取json格式必须变成json串

function copySync(source, target) {//readFileSync writeFileSync
    //先读后写
    var readData = fs.readFileSync(source);
    fs.writeFileSync(target,readData);
}
//异步的方法必须要有回调函数
function copyAsync(source, target) {//readFile writeFile
    fs.readFile(source, function (error, data) {
        if(error)console.log(error);
        fs.writeFile(target, data,function () {});
    });
}
//readFile缺点会把文件全部读入到内存中，不适合读过大的文件，不超过64k的都可以使用这个方法（淹没可用内存）
copyAsync('./name.txt','./name4.txt');
