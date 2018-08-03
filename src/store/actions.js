import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORY,
  RECEIVE_USER,
  REST_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from './mutation-types'
import {
  reqAddress,
  reqCategory,
  reqShops,
  reqLogin,
  reqLoginOut,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api'

export default {
  async getAdderss({commit,state}){
    const {latitude,longitude} = state;
    //开始发送请求
    const geohash = `${latitude},${longitude}`;
    const result = await reqAddress(geohash);
    if(result.code ===0){
      const address = result.data;
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  async getCategory({commit}){
    const result = await reqCategory();
    if(result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORY,{categorys})
    }
  },
  async getShops({commit,state}){
    const {latitude,longitude} = state;
    const result = await reqShops(latitude,longitude);
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步保存用户的数据
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  //实现用户的自动的登录
  async getUser({commit}){
    const result = await reqLogin()
    if(result.code ===0){
      const user = result.data;
      commit(RECEIVE_USER,{user})
    }
  },
  //用户的退出登录
  async loginOut({commit}){
    const result = await reqLoginOut()
    if(result.code ===0){
      commit(REST_USER)
    }
  },
  //模拟订餐的信息
  async shopGoods({commit}){
    const result = await reqShopGoods()
    if(result.code===0){
      const goods = result.data;
      commit(RECEIVE_GOODS,{goods})
    }
  },
  //模拟商家信息
  async shopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code===0){
      const info = result.data;
      commit(RECEIVE_INFO,{info})
    }
  },
  //模拟评分
  async shopRatings({commit}){
    const result = await reqShopRatings()
    if(result.code===0){
      const ratings = result.data;
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
}
