import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

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
      path:'/',
      redirect:'/msite'
    }
  ]
})
