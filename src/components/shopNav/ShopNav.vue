<template>
  <div class="shopNav" :class="goScroll">
    <ul class="navList">
      <li v-for="(item, index) in itemList" :key="index">
        <div class="shopImg">
          <img :src="item.listPicUrl">
        </div>
        <div class="shopDetails">
          <p class="ellipsis">{{item.name}}</p>
          <p class="ellipsis">{{item.simpleDesc}}</p>
          <p class="red">{{item.retailPrice}}</p>
        </div>
      </li>
      <li class="lookMore">点击查看更多
        <img src="../../common/images/go2-3e511991d6.png" alt="">
      </li>
    </ul>
    <div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      this.$nextTick(() => {
          new BScroll('.' + this.goScroll,{
            scrollX: true,
            scrollY: false,
            click: true
          });
      });
    },
    props: {
      itemList : Array,
      navId: Number,

    },
    computed: {
      goScroll () {
        const {navId} = this;
        let navClass;
        navClass = 'scroll' + navId;
        return navClass;
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .shopNav
    height px2rem(474)
    box-sizing border-box
    padding px2rem(38) 0 px2rem(22)
    position relative
    .navList
      height 100%
      width px2rem(2800)
      overflow hidden
      li
        width px2rem(280)
        height 100%
        margin-left px2rem(30)
        float left
        &.lookMore
          color #b4282d
          width px2rem(280)
          height px2rem(280)
          margin-left px2rem(30)
          background-color: #eee
          position absolute
          top: 0
          right: 0
          line-height px2rem(280)
          text-align center
          font-size px2rem(28)
          img
            vertical-align middle
        .shopImg
          width px2rem(280)
          height px2rem(280)
          background-color: #f4f4f4
          img
            width 100%
            height 100%
        .shopDetails
          width 100%
          display flex
          flex-direction column
          justify-content space-around
          font-size px2rem(30)
          p
            margin-top px2rem(16)
            &:nth-child(2)
              color #7f7f7f
            &:nth-child(3)
              color #b4282d

</style>
