<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner ,index) in homeData.focusList" :key="index">
          <img :src="banner.picUrl" alt="">
        </div>
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/2ea9419c837150763b6efaa008bbf816.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/07fb5978447fdc45f9ca8b8d140a18dd.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/903cde6cb7332681b8231387a22a5ab1.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/2957fe22054fa1da4041b400a99b130b.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/ff5b7f41f874315e8ec265196288f4b5.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/bbb8c9928e749604fab0f154331da294.jpg" alt="">-->
        <!--</div>-->
        <!--<div class="swiper-slide">-->
          <!--<img src="../../common/images/be02985067b3a32b3bc28dd41033bd16.jpg" alt="">-->
        <!--</div>-->


      </div>
      <div class="swiper-pagination"></div>
    </div>
    <ul class="assure">
      <li>
        <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png" >
        <span>网易自营品牌</span>
      </li>
      <li>
        <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png" >
        <span>30天无忧退货</span>
      </li>
      <li>
        <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png" >
        <span>48小时快速退款</span>
      </li>
    </ul>
    <piece/>
    <div class="brandShop">
      <div class="brandHeader">
        <span>品牌制造直供商</span>
        <img src="../../common/images/go2-3e511991d6.png">
      </div>
      <ul class="shopDetail">
        <li>
        <img src="../../common/images/bcca932aeb9d818dcf6d3a4804f7311b.png">
        <div class="shopVender">
          <span>Ck制造商</span> <br>
          <span>25元起</span>
        </div>
      </li>
        <li>
          <img src="../../common/images/bcca932aeb9d818dcf6d3a4804f7311b.png">
          <div class="shopVender">
            <span>Ck制造商</span> <br>
            <span>25元起</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getHomeData', () => {//获取轮播图数据
        this.$nextTick(() => {
          new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          });
        })
      });


    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .swiper-container
    .swiper-pagination-bullet
      border-radius 0
      width px2rem(40)
      height px2rem(6)
      &.swiper-pagination-bullet-active
        background-color: #fff
    .swiper-slide img
        width 100%
  .assure
    display flex
    justify-content space-around
    li
      line-height px2rem(72)
      img
        vertical-align middle
      span
        font-size px2rem(22)
  .brandShop
    height px2rem(554)
    /*background-color: #f4f4f4*/
    .brandHeader
      height px2rem(90)
      line-height px2rem(90)
      text-align center
      background-color: #fff
      span
        font-size px2rem(34)
      img
        margin-left px2rem(6)
        position relative
        top: px2rem(4)

   .shopDetail
     clearFix()
     padding 0 px2rem(10) px2rem(30)
     li
       background-color: #f4f4f4
       position relative
       float left
       margin-left px2rem(10)
       .shopVender
         position absolute
         top: px2rem(10)
         left: px2rem(10)
         font-size px2rem(28)



</style>
