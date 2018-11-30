<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner ,index) in bannerData" :key="index">
        <img :src="banner.picUrl" alt="">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['bannerData']),
    },
    mounted () {
      //获取轮播图数据
      this._bannerInit();
    },
    methods: {
      //轮播图初始化
      _bannerInit () {
        this.$store.dispatch('getBannerData', () => {
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              loop: true, // 循环模式选项
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            });
          });
        });
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .swiper-container
    .swiper-slide img
      width 100%
    .swiper-pagination-bullet
      border-radius 0
      width px2rem(40)
      height px2rem(6)
      &.swiper-pagination-bullet-active
        background-color: #fff
</style>
