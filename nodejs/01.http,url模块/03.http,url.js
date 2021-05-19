// node-http-server 
var http = require("http");
var url = require("url");
http.createServer((req,res) => {
    console.log(req.url);
    if(req.url !== "/favicon.ico") {
        // http://localhost:3000/?name=good&age=30
        let user = url.parse(req.url,true).query;
        console.log(url.parse(req.url,true));
        console.log(user.name + "--" + user.age); 
    }
    res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"}); //解决乱码
    res.write("<head> <meta charset='UTF-8'></head>");  //解决乱码  
    res.write("good");  
    res.end("hello nodejs 你好");
}).listen(3000);
console.log("启动服务器");