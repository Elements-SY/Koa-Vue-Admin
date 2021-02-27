'use strict'
const Koa = require('koa');
const bodyparser = require('koa-bodyparser')();
const cors = require('koa-cors');
const router = require('./route')
const app = new Koa();
// 端口号
var port = 3000
app.use(bodyparser);
app.use(cors());
app.use(router.routes(), router.allowedMethods());

// 启动服务
app.listen(port, () => {
   console.log('app is running at port' + port)
});