var school = {};
var fs = require('fs');
/*var age = fs.readFileSync('./age.txt','utf8');
school.age = age;
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
console.log(school);*/
//异步读  串行读
/*fs.readFile('./age.txt','utf8',function (err,data) {//5s
    school.age = data;
    fs.readFile('./name.txt','utf8',function (err,data) {//3s
        school.name = data;
    });
});*/

//并行 读age和name一起来读，以读的最慢的为主
//并行需要一个判断条件 什么时候读完触发一下，根据条件来判断 promise async库
fs.readFile('./name.txt','utf8',function (err,data) {
    school.name = data;
    out();
});
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age = data;
    out();
});
function out() {
    Object.keys(school).length==2&&console.log(school);
}



