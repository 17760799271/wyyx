<template>
  <footer>
    <ul class="footerList">
      <li @click="goto('/home')" >
        <a href="javascript:;" :class="{active: $route.path === '/home'}"><i class="iconfont icon-shouye2"></i>
          首页
        </a></li>
      <li @click="goto('/discernGoods')">
        <a href="javascript:;" :class="{active: $route.path === '/discernGoods'}"><i class="iconfont icon-fangkuai"></i>识物</a>
      </li>
      <li @click="goto('/category')" >
        <a  href="javascript:;" :class="{active: $route.path === '/category'}"><i class="iconfont icon-fenlei"></i>分类</a>
      </li>
      <li @click="goto('/cart')">
        <a  href="javascript:;" :class="{active: $route.path === '/cart'}"><i class="iconfont icon-gouwuchekong"></i>购物车</a>
      </li>
      <li @click="goto('/personal')">
        <a  href="javascript:;" :class="{active: $route.path === '/personal'}"><i class="iconfont icon-icon-"></i>个人</a>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.push(path)
      },
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
 footer
   height px2rem(100)
   width: 100%
   position fixed
   bottom 0
   left: 0
  .footerList
    width: 100%
    height 100%
    display flex
    justify-content space-around
    align-items center
    background-color: #e8e8e8
    >li
      height: 100%
      flex 1
      display flex
      justify-content center
      a
        display flex
        flex-direction column
        text-align center
        justify-content space-around
        &.active
          color #b4282d !important
        .iconfont
          font-size px2rem(40)
          /*color #666666*/


</style>
