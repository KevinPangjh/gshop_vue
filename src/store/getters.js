export  default {
  //商家评价的总数量
  ratingNumber(state){
    return  state.ratings.length
  },
  //商家好评的数量
  ratingGood(state){
    return state.ratings.reduce((preRts,item)=> preRts + (item.rateType ===0 ? 1 : 0),0)
  },
  //购物车的商品的数量
  foodCount(state){
    return state.cartCount.reduce((prevCount,food)=> prevCount + food.count,0)
  },
  //购物车的商品的总价格
  foodPrice(state){
    return state.cartCount.reduce((prePrice,food)=> prePrice + food.count* food.price,0)
  },
  foodEmpty(state){
    return state.cartCount ===[]
  }
}
