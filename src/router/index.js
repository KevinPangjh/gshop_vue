import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

//使用路由
Vue.use(VueRouter);
export  default  new VueRouter({
  routes:[
    {
      path:'/msite',
      component: Msite,
      meta: {
        show: true
      }
    },
    {
      path:'/search',
      component: Search,
      meta: {
        show: true
      }
    },
    {
      path:'/order',
      component: Order,
      meta: {
        show: true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta: {
        show: true
      }
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/shop',
      component: Shop,
      children:[
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
        },
        {
          path: '/shop/info',
          component: ShopInfo,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
