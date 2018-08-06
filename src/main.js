import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui';
import './mock/mockSever'
import VueLazyload from 'vue-lazyload'

import Split from './components/Split/Split'
import './filters'


import loading from './common/image/loading.gif'

Vue.use(VueLazyload,{
  loading
})

Vue.component(Button.name, Button);
//注册成全局的组件
Vue.component('Split',Split)

export default  new Vue({
  el:'#app',
  render: h=>h(App),
  router, //配置路由
  store , //配置
})
