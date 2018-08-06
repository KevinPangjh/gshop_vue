import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_SHOPS,
  RECEIVE_CATEGORY,
  RECEIVE_USER,
  REST_USER,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export  default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address =  address;
  },
  [RECEIVE_CATEGORY](state,{categorys}){
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops;
  },
  [RECEIVE_USER](state,{user}){
    state.user = user;
  },
  [REST_USER](state){
    state.user = {}
  },
  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods;
  },
  [RECEIVE_INFO](state,{info}){
    state.info = info;
  },
  [RECEIVE_RATINGS](state,{ratings}){
    state.ratings = ratings;
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count++;
      //当商品的数量从0到1 的时候添加到cartCount
    }else{
      Vue.set(food,'count',1)
      state.cartCount.push(food)
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count>0){
      //当商品的数量从1到0的时候，就将它从数组cartCount移除
      food.count--;
      if(food.count===0){
        state.cartCount.splice(state.cartCount.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART](state){
    state.cartCount.forEach(food=>food.count =0)
    //将购物车重置为空的数组
    state.cartCount= []
  }
}

