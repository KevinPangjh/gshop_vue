import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import { Button } from 'mint-ui';
import './mock/mockSever'

Vue.component(Button.name, Button);

export default  new Vue({
  el:'#app',
  render: h=>h(App),
  router, //配置路由
  store , //配置
})
