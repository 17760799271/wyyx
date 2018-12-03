<template>
  <div class="firstPage">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
    </div>
    <div class="giftBag">
      <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
    </div>
    <div class="download">
      <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
      <div class="goDownload"></div>
      <div class="goHome" @click="$router.push('/home/homepage')"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
    .firstPage
      background-color: #eeeeee
      height 100%
      img
        display block
        width 100%
      .logo
        height px2rem(500)
        padding-top px2rem(100)
      .download
        position relative
        .goDownload
          width 100%
          height px2rem(205)
          position absolute
          top: 0
          left: 0
        .goHome
          width 100%
          height px2rem(100)
          position absolute
          top: px2rem(205)
          left: 0
</style>
