<template>
  <section id="discernGoods">
    <div class="discernGoods">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner ,index) in topicData.banner" :key="index">
            <img v-lazy="banner.picUrl" alt="">
          </div>
        </div>
      </div>
      <Piece/>
      <div class="nav">
        <ul class="navList">
          <li v-for="(article, index) in topicData.column" :key="index">
            <img v-lazy="article.picUrl" alt=""> <br>
            <span>{{article.title}}</span>
          </li>
        </ul>
      </div>
      <Piece/>
      <div class="recommendCard">
        <div class="recommend" v-if="topicData.recommend">
          <div class="forYou">{{topicData.recommend.name}}</div>
          <div class="content" v-if=" topicData.recommend.Item && index<1" v-for="(topic, index) in topicData.recommend.Item" :key="index">
            <div class="imgText">
              <span>{{topic.nickname}}</span>
              <img v-lazy="topic.picUrl" alt="">
            </div>
            <div class="footer">
              <p>{{topic.subTitle}}</p>
              <p>{{topic.title}}</p>
            </div>
          </div>
          <div class="card" v-if="index>0 && topicData.recommend.Item" v-for="(topic, index) in topicData.recommend.Item" :key="index" >
            <div class="cardText">
              <img v-lazy="topic.avatar"><span>{{topic.nickname}}</span>
              <h2>{{topic.title}}</h2>
              <p class="ellipsis ">{{topic.subTitle}}</p>
            </div>
            <div class="cardImg">
              <img v-lazy="topic.picUrl" alt="">
            </div>
        </div>
        </div>
        <Piece/>
      </div>
      <div class="tenMoment">
        <div class="ten">
          十点一刻
        </div>
        <div class="cardScroll">
          <div class="cards">
            <div class="card" v-for="(what, index) in topicData.tenfifteen" :key="index">
              <p>{{what.title}}</p>
              <p>{{what.desc}}</p>
              <ul class="userList">
                <li>
                  <img v-lazy="imgUrl" alt="" v-for="(imgUrl, index) in what.participantAvatar">
                  <span v-if="what.participantAvatar.length">{{what.participantAvatar.length}}人参与会话</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
      <Piece/>
      <div class="cavil">
        <div class="look">
          严选LOOK
        </div>
        <div class="looks">
          <img src="../../common/images/ba8819675f50b401b10811ab51bfa4e0.jpg" alt="">
          <div class="user">
            <img src="../../common/images/1e3b298276251053f4dd198cbb278047.png" alt="">
            <span>选妹</span>
            <p>唤自然系列</p>
          </div>
        </div>
      </div>
      <div class="more">
        更多精彩
      </div>
      <ul class="shopList">
        <li v-for="(shop, index) in topicData.yxWeek" :key="index">
          <img v-lazy="shop.itemPicUrl" alt="">
          <span>{{shop.title}}</span>
        </li>
      </ul>
    </div>
    <TopHeader/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import TopHeader from '../../components/TopHeader/TopHeader.vue'
  export default {
    mounted () {
      this._bannerInit();//初始化轮播图/滑动

    },
    components: {
      TopHeader,

    },
    computed: {
      ...mapState(['topicData'])
    },
    methods: {
      //初始化轮播图/滑动 eventPassthrough   vertical
      _bannerInit () {
        this.$store.dispatch('getTopicData', () => {
          this.$nextTick(() => {
            new Swiper('.swiper-container', {
              loop: true, // 循环模式选项
            });
          });
          //第二个滑动
          this.$nextTick(() => {
            new BScroll('.nav', {
              scrollX: true,
              scrollY: false,
              click: true
            });
          });
          this.$nextTick(() => {
            new BScroll('#discernGoods', {
              click: true,
            });
          });
          this.$nextTick(() => {
            new BScroll('.cardScroll', {
              click: true,
              scrollX: true,
              scrollY: false,
            });
          });

        });
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #discernGoods
    width: 100%
    height px2rem(1137)
    overflow hidden
    padding-top px2rem(97)
    .discernGoods
      width: 100%
      position absolute
      top: 0
      left: 0
      padding-top px2rem(97)
      .swiper-container
        padding px2rem(26) 0
        .swiper-slide
          width px2rem(720) !important
          height px2rem(415)
          padding 0 px2rem(10)
          margin-left px2rem(26)
          box-sizing border-box
          img
            width 100%

      .nav
        margin px2rem(35) px2rem(31) px2rem(53)
        .navList
          width 242%
          height px2rem(211)
          clearFix()
          overflow hidden
          li
            width px2rem(178)
            text-align center
            margin-left px2rem(33)
            float left
            &:first-child
              margin-left 0
            img
              width 100%
              height px2rem(178)
            span
              color #333333
              font-size px2rem(24)
              line-height px2rem(30)
      .recommend
        margin-top px2rem(25)
        .forYou
          height px2rem(132)
          line-height px2rem(132)
          text-align center
          font-size px2rem(36)
        .content
          height px2rem(520)
          .imgText
            position relative
            margin-left px2rem(31)
            span
              position absolute
              top: 0
              left: 0
              font-size px2rem(32)
            img
              width px2rem(688)
              height px2rem(386)
          .footer
            width px2rem(688)
            margin-left px2rem(31)
            border: px2rem(1) solid #ececec
            font-size px2rem(40)
            color #333333
            line-height px2rem(50)
            box-sizing border-box
            padding px2rem(10) px2rem(20)
            p
              &:nth-child(2)
                font-size px2rem(30)
                color #7f7f7f
        .card
          width px2rem(688)
          margin px2rem(40) 0 px2rem(40) px2rem(31)
          height px2rem(275)
          border: 1px solid #ececec
          position relative
          font-size px2rem(28)
          .cardText
            width px2rem(408)
            padding-left px2rem(20)
            box-sizing border-box
            margin-top px2rem(60)
            img
              width px2rem(32)
              height px2rem(32)
              vertical-align middle
              margin-right px2rem(10)
            h2
              font-size px2rem(34)
              margin-top px2rem(30)
            p
              margin-top px2rem(30)
              color #7f7f7f
              font-size px2rem(24)
          .cardImg
            position absolute
            right 0
            top: 0
            img
              width px2rem(280)
              height px2rem(272)
      .tenMoment
        height px2rem(570)
        padding 0 px2rem(15) px2rem(20)
        box-sizing border-box
        .ten
          height px2rem(120)
          text-align center
          line-height px2rem(120)
          font-size px2rem(34)
        .cards
          width 260%
          overflow hidden
          .card
            height px2rem(410)
            width px2rem(580)
            background-image: url("../../common/images/qipao.png")
            background-repeat no-repeat
            padding px2rem(38) px2rem(40) px2rem(79)
            box-sizing border-box
            font-size px2rem(30)
            text-align center
            float left
            margin-left px2rem(30)
            &:nth-child(2)
              margin-left px2rem(15)
            p
              margin-top px2rem(40)
              &:first-child
                color #7f7f7f
              &:nth-child(2)
                font-size px2rem(40)
                font-weight bold
                margin-bottom px2rem(50)
            .userList
              clearFix()
              width 100%
              li
                margin-left px2rem(50)
                float left
                img
                  margin-left px2rem(8)
                  border-radius px2rem(24)
                  height px2rem(46)
                  width px2rem(46)
                  background-color: #eeeeee
                  vertical-align middle
      .cavil
        padding 0 px2rem(15) px2rem(20)
        box-sizing border-box
        .look
          height px2rem(120)
          text-align center
          line-height px2rem(120)
          font-size px2rem(34)
        .looks
          >img
            width 100%
            height px2rem(375)
          .user
            margin-top px2rem(10)
            font-size px2rem(36)
            img

              border-radius 50%
              width px2rem(46)
              height px2rem(46)
              vertical-align middle
            p
              color #7f7f7f
      .more
        height px2rem(140)
        text-align center
        line-height px2rem(140)
        font-size px2rem(34)
        background-color: #eeeeee
      .shopList
        >li
          width 100%
          padding px2rem(36)
          height px2rem(497)
          box-sizing border-box
          img
            width 100%
            height px2rem(360)
          span
            display inline-block
            margin-top px2rem(30)
            font-size px2rem(28)
            color #333333

</style>
