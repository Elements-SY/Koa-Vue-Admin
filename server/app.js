var express = require('express');
var router = require("./route")
var app = express();
// 端口号
var port = 3000

// 使用路由
app.use(router)

// 启动服务
app.listen(port, () => {
   console.log('app is running at port' + port)
});

/*
1.处理fromData数据流
app.use(bodyParser.urlencoded())
2.处理Json数据格式
app.use(bodyParser.json())
3.处理文本数据
bodyParser.text(options)
4.处理Buffer流数据
bodyParser.raw(options)
*/