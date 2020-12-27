import { request } from './request' // 引入axios的封装方法不带返回拦截

// import { request } from './global' // 引入axios的封装方法带返回拦截

import api from './common'

export const login = params => {
  // 用户登陆
  return request('POST', api.login, params)
}
export const logout = params => {
  // 退出登陆
  return request('POST', api.logout, params)
}
export const menu_list = params => {
  // 侧边导航菜单
  return request('GET', api.menu_list, params)
}
/** 
* @params p @des 省 @string Y
* @params c @des 市 @string Y
* @params x @des 县 @string N
**/
export const weather = params => {
  // 天气预报
  return request('GET', api.weather, params)
}