var http = require('http');
var fs = require('fs');
var url = require('url');
var users = [
    {name:'zfpx',password:'zfpx',id:1},
    {name:'zfpx1',password:'zfpx1',id:2},
    {name:'zfpx3',password:'zfpx3',id:3},
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type',"text/html;charset=utf8");
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/getUsers'){
        res.end(JSON.stringify(users));
    }else if(pathname == '/addUser'){
        var result = '';
        req.on('data',function (data) {
            result+=data;
        });
        req.on('end',function () {
            var user = JSON.parse(result);
            user.id = Math.random();
            users.push(user);
            res.end(JSON.stringify(users));
        });
    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('Content-Type',require('mime').lookup(pathname)+";charset=utf8");
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('not Found');
            }
        });
    }
}).listen(3000);