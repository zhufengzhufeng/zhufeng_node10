var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req,res) {
    console.log(req.url);//请求路径
    console.log(req.method);//请求方法
    console.log(req.headers);//请求头
    //如果默认访问http://localhost:8080 相当于/
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    res.setHeader('Content-Type',"text/html;charset=utf8");
    fs.createReadStream('./index.html').pipe(res);
}).listen(8080);