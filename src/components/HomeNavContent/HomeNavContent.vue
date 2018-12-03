<template>
  <div class="homeNavContentScroll" v-if="navListData">
    <div class="homeNavContent">
      <div class="titleImg">
        <img v-if="navListData.bannerUrl" :src="navListData.bannerUrl" alt="">
      </div>
      <div class="goodThings">
        <div class="title" v-if="navListData.name">{{navListData.name}}</div>
        <ul class="goodsList">
          <li v-if="navListData.itemList" v-for="(item, index) in navListData.itemList" :key="item.index">
            <img :src="item.listPicUrl" alt="">
            <div class="shopIntroduce ellipsis">
              {{item.simpleDesc}}
            </div>
            <div class="ellipsis">{{item.name}}</div>
            <div class="red">￥{{item.couponPrice}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {

    },
    watch: { //使用监视接收数据。 网速卡会影响拖动。
      navListData () {
        this.$nextTick(() => {
          new BScroll('.homeNavContentScroll', {
            click: true,
          });
        });
      }
    },
    props: {
      navListData: Object,
    },
    methods: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.homeNavContentScroll
  width 100%
  height px2rem(1086)
  overflow hidden
  .homeNavContent
    width 100%
    .titleImg
      height px2rem(420)
      width 100%
      img
        height 100%
        width 100%
    .goodThings
      .title
        height px2rem(132)
        line-height px2rem(132)
        text-align center
        font-size px2rem(32)
      .goodsList
        clearFix()
        width 100%
        > li
          float left
          width 47%
          height px2rem(592)
          margin 0 px2rem(11) px2rem(36) px2rem(11)
          box-sizing border-box
          font-size px2rem(34)
          img
            width 100%
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
</style>
