/*
包含n个ajax请求的异步函数
 */
import ajax from './ajax'
//获得请求的位置
export const reqAddress= (geohash)=>ajax('/api/position/'+ geohash)
//获得商家的信息列表信息
export const reqCategory= ()=>ajax('/api/index_category')
//获得商品的信息
export const reqShops= ({latitude,longitude})=>ajax('/api/shops/',{latitude,longitude})
//用户密码登录
export const reqPwdLogin= ({name,pwd,captcha})=> ajax('/api/login_pwd',{name,pwd,captcha},'POST')
//用户发送短信
export const reqSendSms= (phone)=> ajax('/api/sendcode',{phone})
//用户短信登录
export const reqSmsLogin= (phone,code)=> ajax('/api/login_sms',{phone,code},'POST')
//用户自动登录的逻辑
export const reqLogin= ()=>ajax('/api/userinfo')
//用户的退出登录逻辑
export const reqLoginOut= ()=> ajax('/api/logout')
//用户请求模拟shopGoods
export const reqShopGoods= ()=> ajax('/goods')
//用户请求模拟shopinfo
export const reqShopInfo= ()=> ajax('/info')
//用户请求模拟shopRatins
export const reqShopRatings= ()=> ajax('/ratings')


