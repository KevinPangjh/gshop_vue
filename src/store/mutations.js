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
  DECREMENT_FOOD_COUNT
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
    }else{
      Vue.set(food,'count',1)
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count>0){
      food.count--;
    }
  }
}

