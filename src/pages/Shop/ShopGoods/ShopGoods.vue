<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(good,index) in goods" :key="index"
          :class="{current: currentIndex===index}" @click="menuItem(index)">
            <span class="text bottom-border-1px">
                 <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul  ref="itemFood">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index" >
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods" :key="index"
              @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.name}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"></CartControl>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
    <Food :food="food" ref="food" ></Food>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import CartControl from '../../../components/CartControl/CartControl'
  import Food from '../../../components/Food/Food'
  import ShopCart from '../../../components/ShopCart/ShopCart'
  export default {
    data(){
      return{
        ScorllY:0,
        tops:[],
        food:{},
      }
    },
    components:{
      CartControl,
      Food,
      ShopCart
    },
    computed:{
      ...mapState(['goods']),
      currentIndex(){
        const{tops,ScorllY} = this;
        return tops.findIndex((top,index)=>
          ScorllY>= top && ScorllY < tops[index+1]
        )
      }
    },
    mounted(){
      this.$store.dispatch('shopGoods',()=>{
        this.$nextTick(()=>{
          this._initTop()
          this._initScroll()
        })
      });
    },

    methods:{
      //实现左边和右边的滚动
      _initScroll(){
        new BScroll('.menu-wrapper',{
          click: true
        }),
          this.scrollRight= new BScroll('.foods-wrapper',{
            probeType: 1,
            click: true
          })
        //拿到右边的滚动时候的值
        this.scrollRight.on('scroll',(pos)=>{
          this.ScorllY = Math.abs(pos.y);
        })
        //惯性滑动的时候
        this.scrollRight.on('scrollEnd',(pos)=>{
          this.ScorllY = Math.abs(pos.y);
        })
      },
      //初始化获得商品的列表的高度
      _initTop(){
        let tops=[];
        let top=0;
        tops.push(top)
        let lis = this.$refs.itemFood.getElementsByClassName('food-list-hook');
        Array.prototype.slice.call(lis).forEach(list=>{
          top += list.clientHeight;
          tops.push(top);
        })
        this.tops = tops;
      },
      menuItem(index){
        const top = this.tops[index];
        this.ScorllY = top;
        this.scrollRight.scrollTo(0,-top,300)
      },
      showFood(food){
        //更新food的状态
        this.food = food
        // 显示food组件(父组件调用子组件的方法)
        this.$refs.food.closeFood();
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"

  .goods
    display: flex
    position: absolute
    top: 258px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 22px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>



