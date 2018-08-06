/*
包含n个ajax请求的异步函数
 */
import ajax from './ajax'
const BASE_URL = '/api'
//获得请求的位置
export const reqAddress= (geohash)=>ajax(BASE_URL+'/position/'+ geohash)
//获得商家的信息列表信息
export const reqCategory= ()=>ajax(BASE_URL+'/index_category')
//获得商品的信息
export const reqShops= ({latitude,longitude})=>ajax(BASE_URL+'/shops/',{latitude,longitude})
//用户密码登录
export const reqPwdLogin= ({name,pwd,captcha})=> ajax(BASE_URL+'/login_pwd',{name,pwd,captcha},'POST')
//用户发送短信
export const reqSendSms= (phone)=> ajax(BASE_URL+'/sendcode',{phone})
//用户短信登录
export const reqSmsLogin= (phone,code)=> ajax(BASE_URL+'/login_sms',{phone,code},'POST')
//用户自动登录的逻辑
export const reqLogin= ()=>ajax(BASE_URL+'/userinfo')
//用户的退出登录逻辑
export const reqLoginOut= ()=> ajax(BASE_URL+'/logout')
//用户请求模拟shopGoods
export const reqShopGoods= ()=> ajax('/goods')
//用户请求模拟shopinfo
export const reqShopInfo= ()=> ajax('/info')
//用户请求模拟shopRatins
export const reqShopRatings= ()=> ajax('/ratings')


