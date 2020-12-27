
// 通过axios-mock-adapter生成代理api地址
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import api from '../http/common';
import userAccount from './userAccount'
import menuData from './menuData'

// let APIHOST = 'https://api.6vzz.com'
// axios.defaults.baseURL = APIHOST
// axios.defaults.timeout = 10000
export default {
  init() {
    let mock = new MockAdapter(axios);
    // console.log(mock)
    // 模拟成功请求
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });
    // 模拟失败请求
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    // 登录
    mock.onPost(api.login).reply(config => {
      // 解析axios传过来的数据
      let { account, password } = JSON.parse(config.data);
      // console.log(account, password)
      return new Promise((resolve, reject) => {
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
            resolve([200, { code: 200, msg: '登录成功', accountInfo }]);
          } else {
            resolve([200, { code: 500, msg: '账号错误' }])
          }
        }, 500);
      })
    });

    // 退出
    mock.onPost(api.logout).reply(config => {
      // 解析axios传过来的数据
      let { id, token } = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
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
            resolve([200, { code: 200, msg: '退出成功', accountInfo }]);
          } else {
            resolve([200, { code: 500, msg: '退出失败' }])
          }
        }, 500);
      })
    });

    // 侧边导航菜单
    mock.onGet(api.menu_list).reply(config => {
      // 解析axios传过来的数据
      // console.log(config.params)
      let res = config.params;
      // console.log(res)
      return new Promise((resolve, reject) => {
        // 先创建一个菜单对象为空对象
        let data = null;
        setTimeout(() => {
          // 判断登陆成功之后传过来的auth否与Mock数据中meunData数组里的所匹配
          let hasAuth = menuData.some(item => {
            if (item.auth === res.auth) {
              data = JSON.parse(JSON.stringify(item));
              return true;
            } else {
              return false
            }
          });
          // 判断该用户权限是否存在并且返回成功或者失败的信息
          if (hasAuth) {
            resolve([200, { code: 200, msg: '获取成功', data }]);
          } else {
            resolve([200, { code: 500, msg: '获取失败' }])
          }
        }, 500);
      })
    });

  }
}