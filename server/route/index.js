const router = require('koa-router')();
var menuData = require("../data/menuData") // 导航菜单
var userAccount = require("../data/userAccount") // 用户账号

// 用户登陆
router.post('/user/login', async ctx => {
  // console.log(ctx.request.body)
  // 解析axios传过来的数据
  let { account, password } = ctx.request.body;
  // 先创建一个用户为空对象
  let accountInfo = null;
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
        ctx.body = { code: 200, msg: '登录成功', accountInfo }
     } else {
        ctx.body = { code: 500, msg: '账号错误' }
     }
})

// 退出登陆
router.post('/user/logout', async ctx => {
  // 解析axios传过来的数据
  let { id, token } = ctx.request.body;
  // 先创建一个用户为空对象
  let accountInfo = null;
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
      ctx.body = { code: 200, msg: '退出成功', accountInfo };
     } else {
      ctx.body = { code: 500, msg: '退出失败' };
     }
})

// 侧边导航菜单
router.get('/menu/list', async ctx => {
  let { auth } = ctx.request.query;
  // 先创建一个菜单对象为空对象
  let data = null;
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
      ctx.body = { code: 200, msg: '获取成功', data };
     } else {
      ctx.body = { code: 500, msg: '获取失败' };
     }
})

module.exports = router;