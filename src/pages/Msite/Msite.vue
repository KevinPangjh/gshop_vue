<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop class="header" :title="address.name">
      <router-link slot="search" to="/header_search" class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" to="login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categoryAttr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="BaseImgUrl+ c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>
<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from '../../components/ShopList/ShopList'

  export default {
    data(){
      return{
        BaseImgUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed:{
      ...mapState(['address','categorys']),
      //创建一个二维数组来存放轮播图的数据
      categoryAttr(){
        //这是一个二维数组
        let categoryAttr =[];
        //创建一个小数组来存放一页所需要的信息
        let samll = [];
        const {categorys} = this;
        categorys.forEach(msg=>{
          if(samll.length === 0){
            //在长度为0的时候将这个数组添加到另外一个数组里面，形成一个二维数组2
            categoryAttr.push(samll);
          }
          //把遍历的元素放到里面
          samll.push(msg);
          //长度为8的时候，重新的新建一个数组
          if(samll.length ===8){
            samll = [];
          }
        })
        return categoryAttr;
      }

    },
    components:{
      HeaderTop,
      ShopList
    },
    mounted(){
      //异步的商家的信息
      this.$store.dispatch('getShops');
      this.$store.dispatch('getCategory');

      // new Swiper ('.swiper-container', {
      //   loop: true,
      //
      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      // })
    },
    watch:{
      categorys(value){
        //当资源全部加载完成之后才开始轮播加载
        //重点可以看这个
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true,

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  //首页
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
