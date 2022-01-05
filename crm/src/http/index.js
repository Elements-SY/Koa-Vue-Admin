import { request, translateHttp, baidubceHttp } from './request' // 引入axios的封装方法不带返回拦截

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
export const translate = params => {
  // 翻译
  return translateHttp('GET', api.translate, params)
}
export const baiduAccessToken = params => {
  // 获取百度Access Token
  let query = {
    grant_type: "client_credentials",
    ...params
  }
  return baidubceHttp('GET', api.baiduAccessToken, query)
}
export const orcImageText = (access_token, base64) => {
  // 百度OCR 通用文字识别（高精度版）
  let params = 'image=' + encodeURIComponent(base64)
  return baidubceHttp('POST', `/rest/2.0/ocr/v1/accurate_basic?access_token=${access_token}`, params)
}
export const orcImageIdCard = (access_token, param) => {
  // 百度OCR 身份证
  let params = 'image=' + encodeURIComponent(param.image) + `&id_card_side=${param.id_card_side}`
  return baidubceHttp('POST', `/rest/2.0/ocr/v1/idcard?access_token=${access_token}`, params)
}
export const orcImageAnimal = (access_token, base64) => {
  // 百度OCR 动物
  let params = 'image=' + encodeURIComponent(base64)
  return baidubceHttp('POST', `/rest/2.0/image-classify/v1/animal?access_token=${access_token}`, params)
}
export const orcImagePlant = (access_token, base64) => {
  // 百度OCR 植物
  let params = 'image=' + encodeURIComponent(base64)
  return baidubceHttp('POST', `/rest/2.0/image-classify/v1/plant?access_token=${access_token}`, params)
}
export const orcImageDish = (access_token, base64) => {
  // 百度OCR 菜品
  let params = 'image=' + encodeURIComponent(base64)
  return baidubceHttp('POST', `/rest/2.0/image-classify/v2/dish?access_token=${access_token}`, params)
}
export const orcImageIngredient = (access_token, base64) => {
  // 百度OCR 果蔬
  let params = 'image=' + encodeURIComponent(base64)
  return baidubceHttp('POST', `/rest/2.0/image-classify/v1/classify/ingredient?access_token=${access_token}`, params)
}


