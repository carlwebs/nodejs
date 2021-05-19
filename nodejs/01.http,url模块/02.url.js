const url = require("url");
const api = "http://www.baidu.com?name=jack&age=12";
const getValue = url.parse(api,true).query;
console.log(`名称：${getValue.name},年龄：${getValue.age}`);