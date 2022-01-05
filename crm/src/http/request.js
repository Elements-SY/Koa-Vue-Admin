import axios from 'axios'
let APIHOST;
let translateAPIHOST;
let baidubceAPIHOST;
axios.defaults.baseURL = APIHOST
axios.defaults.timeout = 10000
import store from '@/store'
// crm 环境
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
// 百度翻译 环境
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    translateAPIHOST = '/translate'
    break
  // 测试环境
  case 'testing':
    translateAPIHOST = 'http://api.fanyi.baidu.com'
    break
  // 生产环境
  default:
    translateAPIHOST = 'http://api.fanyi.baidu.com'
    break
}
// 百度OCR 环境
switch (process.env.NODE_ENV) {
  // 开发环境
  case 'development':
    baidubceAPIHOST = '/baidubce'
    break
  // 测试环境
  case 'testing':
    baidubceAPIHOST = 'https://aip.baidubce.com'
    break
  // 生产环境
  default:
    baidubceAPIHOST = 'https://aip.baidubce.com'
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
// 百度翻译：API method 封装
export const translateHttp = function (method, url, params) {
  const config = {
    baseURL: translateAPIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: store.state.account.token ? `Bearer ${store.state.account.token}` : ""
    }
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
// 百度OCR识别：API封装
export const baidubceHttp = function (method, url, params) {
  const config = {
    baseURL: baidubceAPIHOST,
    method: method.toLocaleUpperCase() || 'GET',
    url,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
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