import Vue from 'vue'
import moment from 'moment'

//时间格式化函数
Vue.filter('data-format',function(value,format='YYYY-MM-DD HH:mm:ss'){
   return moment(value).format(format)
})
