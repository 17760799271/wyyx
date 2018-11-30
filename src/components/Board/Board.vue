<template>
  <div class="board">
    <div class="firstPublic">
      {{title}}
    </div>
    <div class="checkAll">
      <span>查看全部</span>
      <img src="../../common/images/indexNewArrow-f3b56d449b.png">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .board
    text-align center
    font-size px2rem(36)
    color #a3b5c8
    width 100%
    height px2rem(260)
    background-image url("../../common/images/bitmap-d4f7b37e32.png")
    .firstPublic
      position relative
      top: px2rem(80)
    .checkAll
      background-color: #d8e5f1
      width px2rem(240)
      height px2rem(56)
      line-height px2rem(56)
      margin 0 auto
      position relative
      top: px2rem(120)
</style>
