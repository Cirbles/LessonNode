// //导入http模块
// var http = require("http");
// //创建http Server并传入回调函数
// var server = http.createServer(function (request,response) {
//     //回调函数接收request和response对象，
//     //获得http请求的method和url
//     console.log(request.method + ":" + request.url);
//     //将http请求的200写入response，同时设置Content-Type:test/html
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('Hello world!');
// });
//
// server.listen(8080);
// console.log('Server is running at http://127.0.0.1:8080/');
var got = require("got");

function success(){
    var http = new XMLHttpRequest();
    http.onreadystatechange= function(){
        if(http.status === 200 && http.readyState === 4){
            var msg = http.responseText;
            var box = document.getElementById('box');
            box.innerHTML= JSON.parse(msg).name;
        }
    }
    //发送请求
    http.open('GET', '/data');
    http.send();
}
console.log(success());