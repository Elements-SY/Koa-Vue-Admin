import axios from 'axios'
let APIHOST;
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
import store from '@/store'
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    APIHOST = '/dev-api'
    break
  // 测试环境
  case 'testing':
    APIHOST = 'http://localhost:3000'
    break
  // 生产环境
  default:
    APIHOST = 'http://localhost:3000'
    break
}
// API method 封装
export const request = function (method, url, params) {
  const config = {
    baseURL: APIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.state.account.token ? `Bearer ${store.state.account.token}` : ""
    }
    // transformRequest: [
    //   data =>
    //     Object.entries(data)
    //       .map(kv => `${kv[0]}=${kv[1]}`)
    //       .join('&')
    // ]
  }
  if (method.toLocaleUpperCase() === 'GET' || method.toLocaleUpperCase() === 'DELETE') {
    config.params = params
  } else {
    config.data = params
  }
  if (!config.url) {
    return
  }
  config.data = config.data || {}
  if (config.method === 'DELETE') {
    config.data = {}
  }
  return axios(config)
}
