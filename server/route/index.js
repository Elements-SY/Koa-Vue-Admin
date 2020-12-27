var express = require('express')
var request = require('request');
var bodyParser = require('body-parser');
var router = express.Router()
var menuData = require("../data/menuData") // 导航菜单
var userAccount = require("../data/userAccount") // 用户账号
// app.use(express.json()) or app.use(bodyParser.json())
// 请求体解析数据方式
router.use(bodyParser.json())

// 这种方式是设置所有请求头统一设置,
// 这一章我们对单个请求做独立设置请求头
router.all('*', function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');//的允许所有域名的端口请求（跨域解决）
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   res.header('Access-Control-Allow-Methods', '*');
   res.header('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
   next();
})

// 用户登陆
router.post('/user/login', (req, res, next) => {
   console.log(req.body)
   // 解析axios传过来的数据
   let { account, password } = req.body;
   // 先创建一个用户为空对象
   let accountInfo = null;
   setTimeout(() => {
      // 判断填写用户账号和密码是否与Mock数据中的所匹配
      let hasUser = userAccount.some(item => {
         if (item.account === account && item.password === password) {
            accountInfo = JSON.parse(JSON.stringify(item));
            accountInfo.password = undefined;
            return true;
         } else {
            return false
         }
      });
      // 判断该用户是否存在并且返回成功或者失败的信息
      if (hasUser) {
         res.status(200).json({ code: 200, msg: '登录成功', accountInfo });
      } else {
         res.status(200).json({ code: 500, msg: '账号错误' });
      }
   }, 500);
})

// 退出登陆
router.post('/user/logout', (req, res, next) => {
   // 解析axios传过来的数据
   let { id, token } = req.body;
   // 先创建一个用户为空对象
   let accountInfo = null;
   setTimeout(() => {
      // 判断填写用户账号和密码是否与Mock数据中的所匹配
      let hasUser = userAccount.some(item => {
         if (item.id === id && item.token === token) {
            accountInfo = JSON.parse(JSON.stringify(item));
            accountInfo.token = undefined;
            return true;
         } else {
            return false
         }
      });
      // 判断该用户是否存在并且返回成功或者失败的信息
      if (hasUser) {
         res.status(200).json({ code: 200, msg: '退出成功', accountInfo });
      } else {
         res.status(200).json({ code: 500, msg: '退出失败' });
      }
   }, 500);
})

// 侧边导航菜单
router.get('/menu/list', (req, res, next) => {
   let { auth } = req.query;
   // 先创建一个菜单对象为空对象
   let data = null;
   setTimeout(() => {
      // 判断登陆成功之后传过来的auth否与Mock数据中meunData数组里的所匹配
      let hasAuth = menuData.some(item => {
         if (item.auth === auth) {
            data = JSON.parse(JSON.stringify(item));
            return true;
         } else {
            return false
         }
      });
      // 判断该用户权限是否存在并且返回成功或者失败的信息
      if (hasAuth) {
         res.status(200).json({ code: 200, msg: '获取成功', data });
      } else {
         res.status(200).json({ code: 500, msg: '获取失败' });
      }
   }, 500);
})

module.exports = router;