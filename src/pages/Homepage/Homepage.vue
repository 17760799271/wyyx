<template>
  <div class="homeContent">
    <div class="content">
      <Banner/>
      <ul class="assure">
        <li>
          <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png">
          <span>网易自营品牌</span>
        </li>
        <li>
          <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png">
          <span>30天无忧退货</span>
        </li>
        <li>
          <img src="../../common/images/cae45612b8aae577d8bd73338e2fc02c.png">
          <span>48小时快速退款</span>
        </li>
      </ul>
      <Piece/>
      <div class="brandShop">
        <div class="brandHeader">
          <span>品牌制造直供商</span>
          <img src="../../common/images/go2-3e511991d6.png">
        </div>
        <ul class="shopDetail">
          <li v-for="(tag ,index) in getTagList" :key="index">
            <img :src="tag.picUrl">
            <div class="shopVender">
              <span>{{tag.name}}</span> <br>
              <span>{{tag.floorPrice}}元起</span>
            </div>
          </li>

        </ul>

      </div>
      <Piece/>
      <Board title="新品首发"/>
      <shopNav :itemList="homeData.newItemNewUserList"/>
      <Piece/>
      <Board title="人气推荐"/>
      <shopNav :itemList="homeData.popularItemList"/>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState, mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  import Banner from '../../components/Banner/Banner.vue'
  import Board from '../../components/Board/Board.vue'
  import shopNav from '../../components/shopNav/shopNav.vue'
  export default {
    components : {
      Banner,
      Board,
      shopNav, //传入itemList

    },
    mounted () {
      //获取home数据,初始化content滚动
      this._contentScroll()
    },
    computed: {
      ...mapState(['homeData']),
      ...mapGetters(['getTagList'])
    },
    methods: {
      //初始化conten滚动及获取home数据
      _contentScroll () {
        this.$store.dispatch('getHomeData', () => {
          this.$nextTick(() => {
            new BScroll('.homeContent',{
              scrollX: false,
              click: true
            });
          });

        });
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.homeContent
  width: 100%
  height px2rem(1086)
  overflow hidden
  .content
    width: 100%
    height: 100%
    position absolute
    top 0
    left 0
    padding-top px2rem(148)
    .box
      width: 100%
      height: 500px
      background-color: skyblue
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
      padding-bottom px2rem(30)
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
      padding 0 px2rem(5)
      li
        background-color: #f4f4f4
        position relative
        float left
        margin-left px2rem(10)
        img
          width px2rem(355)
          height px2rem(236)
        &:nth-child(3)
          margin-top px2rem(15)
        &:nth-child(4)
          margin-top px2rem(15)
        .shopVender
          position absolute
          top: px2rem(10)
          left: px2rem(10)
          font-size px2rem(28)


</style>
