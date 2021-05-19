// node-http-server 
var http = require("http");
http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"}); //解决乱码
    res.write("<head> <meta charset='UTF-8'></head>");  //解决乱码  
    res.write("good");  
    res.end("hello nodejs 你好");
}).listen(3000);
console.log("启动服务器");