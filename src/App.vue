<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.show"></FooterGuide>
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    //获取商家的地址
    //自动登录的实现
    mounted(){
      this.$store.dispatch('getAdderss');
      this.$store.dispatch('getUser')
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
