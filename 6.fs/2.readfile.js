var school = {};
var fs = require('fs');
/*var age = fs.readFileSync('./age.txt','utf8');
school.age = age;
var name = fs.readFileSync('./name.txt','utf8');
school.name = name;
console.log(school);*/
//异步读
fs.readFile('./name.txt','utf8',function (err,data) {
    school.name = data;
});
fs.readFile('./age.txt','utf8',function (err,data) {
    school.age = data;
});
console.log(school);