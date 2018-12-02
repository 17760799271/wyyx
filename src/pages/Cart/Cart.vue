<template>
  <div class="cart">
    <header class="header">
      <div class="title">
        <span>购物车</span>
        <span class="red">领券</span>
      </div>
      <div class="assure">
        <img src="../../common/images/hook.png" alt=""> 30天无忧退货 &nbsp;&nbsp;
        <img src="../../common/images/hook.png" alt=""> 48小时快速退款 &nbsp;&nbsp;
        <img src="../../common/images/hook.png" alt=""> 满88元免邮费 &nbsp;&nbsp;

      </div>
    </header>
    <section class="cartScroll">
      <section class="cartContent">
        <div class="login">
          <span>去添加点什么吧</span> <br>
          <button @click="$router.push('/personal')">登录</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cart
    height: 100%
    background-color: #f4f4f4
    .header
      .title
        text-align center
        font-size px2rem(40)
        height px2rem(88)
        line-height px2rem(88)
        background-color: #fff
        padding 0 px2rem(80)
        span
          &:first-child
            position relative
            left px2rem(20)
        .red
          float right
          font-size px2rem(30)
          color #b4282d

      .assure
        font-size px2rem(24)
        padding px2rem(30) px2rem(40) 0
        img
          vertical-align middle
          width px2rem(32)
          margin-bottom px2rem(8)
    .cartScroll
      height 100%
      position relative
      .cartContent
        height: 100%
        background-image: url("../../common/images/cart.png")
        background-repeat no-repeat
        background-position 50% 28%
        .login
          position absolute
          top: 42%
          left: 50%
          text-align center
          margin-left - px2rem(240)
          span
            color #b199a5
            font-size px2rem(26)
            line-height px2rem(50)
          button
            outline none
            color #fff
            width px2rem(480)
            height px2rem(92)
            background-color: #b4282d
            border none
            font-size px2rem(36)
</style>
