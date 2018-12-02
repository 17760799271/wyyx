<template>
  <header class="header">
    <a href="javascript:;" class="home">
      <i class="iconfont icon-shouye2" @click="$router.push('/home')"></i>
    </a>
    <h1 class="logo">
      <img src="../../common/images/indexLogo-11d65342f9.png" alt="">
    </h1>
    <div class="headerRight">
      <div class="rightIcon">
        <img src="../../common/images/search2-2fb94833aa.png" alt="" @click="$router.push('/category')">
        <span class="shopCart" @click="$router.push('/cart')"></span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .header
      padding 0 px2rem(26)
      display flex
      width 100%
      height px2rem(97)
      line-height px2rem(97)
      background-color: #fafafa
      text-align center
      position fixed
      top: 0
      left: 0
      .home
        .icon-shouye2
          color #000000
          font-size px2rem(60)
      .logo
        margin 0 auto
        line-height px2rem(97)
        position relative
        left px2rem(25)
        img
          vertical-align middle
          width px2rem(180)
          height px2rem(50)
      .headerRight
        width px2rem(200)
        float right
        .rightIcon
          float left
          margin-bottom px2rem(10)
          position relative
          bottom px2rem(6)
          img
            width px2rem(48)
            margin-right px2rem(18)
            position relative
            top px2rem(4)
          .shopCart
            display inline-block
            width px2rem(55)
            height px2rem(79)
            background-image: url("../../common/images/icons.png")
            background-repeat no-repeat
            background-position 0 px2rem(25)
</style>
