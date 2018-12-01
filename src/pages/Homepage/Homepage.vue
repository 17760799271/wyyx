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
      <shopNav :itemList="homeData.newItemNewUserList" :navId="1"/>
      <Piece/>
      <Board title="人气推荐"/>
      <shopNav :itemList="homeData.popularItemList" :navId="2"/>
      <Piece/>
      <div class="limitTime">
        <div class="leftTime">
          <span class="headerText">严选限时购</span>
          <div class="time">
            <span>23</span>
            <span class="black">: </span>&nbsp;
            <span>10</span>
            <span class="black">: </span>&nbsp;
            <span>49</span>
          </div>
          <span class="number">15275736000000</span>
        </div>
        <div class="rightShop">
          <img src="../../common/images/32bf0afcde6a15605ba5422c2d2ddb5d.png" alt="">
        </div>
      </div>
      <Piece/>
      <div class="welfare">
        <img src="../../common/images/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
      </div>
      <Piece/>
      <div class="sift">
        <div class="siftHeader">
          <span>专题精选</span>
          <img src="../../common/images/go2-3e511991d6.png">
        </div>
        <div class="siftScroll">
          <ul class="siftList">
            <li v-for="(shop, index) in homeData.topicList" :key="shop.id">
              <img :src="shop.itemPicUrl">
              <div class="detail">
                <span>{{shop.title}}</span>
                <span class="red">{{shop.priceInfo}}元起</span>
              </div>
              <span class="shopContent">{{shop.subtitle}}</span>
            </li>
          </ul>
        </div>

      </div>
      <Piece/>
      <div class="goodThings" v-for="(shops, index) in homeData.cateList" :key="shops.index">
        <div class="title">{{shops.name}}</div>
        <ul class="goodsList">
          <li v-for="(shop, index) in shops.itemList" :key="shop.index">
            <img :src="shop.listPicUrl" alt="">
            <div class="shopIntroduce ellipsis">
              {{shop.simpleDesc}}
            </div>
            <div class="ellipsis">{{shop.name}}</div>
            <div class="red">￥{{shop.couponPrice}}</div>
          </li>
          <li class="lookMore">
            更多居家好物 <br>
          </li>
        </ul>
        <Piece v-show="index<9"/>
      </div>
      <div class="company">
        <div class="download">
          <button class="downloadApp">下载App</button>
          <button class="downloadPC">电脑版</button>
        </div>
        <div class="companyDetail">
          <span>网易公司版权所有© 1997-2018</span> <br>
          <span>视食品经营许可证：JY13301080111719</span>
        </div>
      </div>
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
      this._contentScroll();
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
            new BScroll('.siftScroll',{
              scrollX: true,
              scrollY: false,
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
    position absolute
    top 0
    left 0
    padding-top px2rem(148)
    padding-bottom px2rem(100)
    .box
      width: 100%
      height: px2rem(100)
      background-color: #fff
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
      height px2rem(570)
      padding-bottom px2rem(30)
      .brandHeader
        height px2rem(80)
        line-height px2rem(80)
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
        margin-top px2rem(15)
        img
          width px2rem(355)
          height px2rem(236)
        .shopVender
          position absolute
          top: px2rem(10)
          left: px2rem(10)
          font-size px2rem(28)


    .limitTime
      height px2rem(441)
      box-sizing border-box
      padding px2rem(33) px2rem(45)
      position relative
      .leftTime
        span
          display inline-block
        .headerText
          font-size px2rem(42)
          margin-top px2rem(75)
        .time
          margin-top px2rem(30)
          font-size px2rem(30)
          color white
          line-height px2rem(58)
          span
            height px2rem(58)
            width px2rem(68)
            background-color: #444444
            text-align center
          .black
            width px2rem(0)
            color black
            background-color: #fff
        .number
          font-size px2rem(26)
          margin-top px2rem(60)


      .rightShop
        width px2rem(354)
        height  px2rem(354)
        position absolute
        top: px2rem(40)
        right: px2rem(40)
        img
          width 100%
          height 100%
    .welfare
      height  px2rem(331)
      img
        width 100%
        height 100%
    .sift
      height px2rem(576)
      padding-bottom px2rem(30)
      .siftHeader
        height px2rem(90)
        line-height px2rem(90)
        text-align center
        background-color: #fff
        span
          font-size px2rem(28)
        img
          width px2rem(28)
          margin-left px2rem(6)
          position relative
          top: px2rem(4)
      .siftScroll
        .siftList
          width 240%
          overflow hidden
          clearFix()
          >li
            width px2rem(600)
            height px2rem(486)
            float left
            img
              width px2rem(600)
              height  px2rem(353)
            .detail
              width 100%
              font-size px2rem(28)
              span
                float left
                margin px2rem(30) px2rem(30) 0

                &.red
                  float right
                  color #b4282d
            .shopContent
              font-size px2rem(28)
              color #7f7f7f
              float left
              margin-top px2rem(30)
              margin-left px2rem(30)
    .goodThings
      .title
        height px2rem(132)
        line-height px2rem(132)
        text-align center
        font-size px2rem(32)
      .goodsList
        clearFix()
        width 100%
        >li
          float left
          width 50%
          height px2rem(592)
          padding 0 px2rem(11) px2rem(36)
          box-sizing border-box
          font-size px2rem(34)
          img
            width px2rem(380)
            height px2rem(380)
          .shopIntroduce
            width 100%
            height px2rem(80)
            line-height px2rem(80)
            text-align center
            background-color: #f1ece2
            border-radius px2rem(6)
            color #9f8a60
            font-size px2rem(26)
            margin-bottom px2rem(20)
          .red
            color #c04a4e
            margin-top px2rem(20)

          &.lookMore
            background-color: #f4f4f4
            text-align center
            width px2rem(380)
            height px2rem(380)
            line-height px2rem(300)
            background-image: url("../../common/images/goodGridMore-233aaf669a.png")
            background-repeat no-repeat
            background-position center 75%
            margin-bottom px2rem(20)
    .company
      height px2rem(269)
      background-color: #414141
      box-sizing border-box
      text-align center
      padding px2rem(60) px2rem(80) px2rem(30)
      .download
        display flex
        justify-content space-around
        button
          color #fff
          width px2rem(192)
          height px2rem(70)
          outline none
          background-color: #414141
          border: 1px solid #fff
          font-size px2rem(25)
      .companyDetail
        margin-top px2rem(25)
        color #999999
        font-size px2rem(28)
        line-height px2rem(34)
</style>
