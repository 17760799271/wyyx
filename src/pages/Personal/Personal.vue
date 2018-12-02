<template>
  <div class="personal" :class="{white: isShow != 0}">
    <TopHeader/>
    <h1 class="logo" :class="{scale: isShow != 0}">
      <img src="../../common/images/logo.png" alt="">
    </h1>
    <div class="loginWay" v-if="isShow === 0">
      <button class="active" @click="goLogin(1)">
        <i class="iconfont icon-shouji"></i>手机号码登录
      </button>
      <button @click="goLogin(2)">
        <i class="iconfont icon-youxiang"></i>
        邮箱账号登录
      </button>
      <span>手机号快速注册 》</span>
    </div>
    <div class="switchLogin" v-if="isShow != 0">
      <div class="verify">
        <input type="text" placeholder="请输入手机号" v-show="isShow === 1" v-model="phone">
        <input type="text" placeholder="请输入短信验证码" v-show="isShow === 1" v-model="code">
        <input type="text" placeholder="邮箱账号" v-show="isShow === 2" v-model="email">
        <input type="text" placeholder="密码" v-show="isShow === 2" v-model="password">
        <button class="getCode" :class="{startGetTime: startGetTime}" :disabled="startGetTime" v-show="isShow === 1" @click="getPhoneCode">{{getCodeShow}}</button>
      </div>
      <span class="errMsg" v-show="errMsg">{{errMsg}}</span>
      <div class="trouble">
        <span v-show="isShow === 1">遇到的问题？</span>
        <span v-show="isShow === 1">使用密码验证登录</span>
        <span v-show="isShow === 2" class="left">注册账号</span>
        <span v-show="isShow === 2" class="right">忘记密码</span>
      </div>
      <button class="active" @click="login">登录</button>
      <button @click="isShow = 0">其他账号登录</button>
      <span v-if="isShow === 1">注册账号</span>
    </div>
    <div class="loginMethods">
      <i class="iconfont icon-weixin"></i> 微信 &nbsp;&nbsp; | &nbsp;&nbsp;
      <i class="iconfont icon-QQ"></i> QQ &nbsp;&nbsp; | &nbsp;&nbsp;
      <i class="iconfont icon-weibo"></i> 微博
    </div>
  </div>
</template>

<script>
  import TopHeader from '../../components/TopHeader/TopHeader.vue'
  export default {
    data () {
      return {
        isShow: 0,
        getCodeShow: '获取验证码',
        getTime: 30,
        startGetTime: false,
        phone: null,
        code: null,
        errMsg: null,
        email: null,
        password: null,

      }
    },
    components: {
      TopHeader,

    },
    methods: {
      //切换登录方式
      goLogin (method) {
        this.isShow = method;
      },
      //获取手机验证码
      getPhoneCode () {
        let {getCodeShow, getTime, startGetTime} = this;
        this.startGetTime = true;
        this.getCodeShow = `已发送10秒`;
        this.timer = setInterval(() => {
          getTime--;
          this.getCodeShow = `已发送${getTime}秒`;
          if (getTime === 0) {
            clearInterval(this.timer);
            this.startGetTime = false;
            this.getCodeShow = '获取验证码';
          }

        }, 1000)
      },
      //登录
      login () {
        let {phone, code, email, password, isShow, errMsg} = this;
        if (isShow === 1) {
          if (!phone) {
            this.errMsg = '请输入手机号!';
            return;
          } else if (!code) {
            this.errMsg = '请输入手机验证码!';
            return;
          }
        } else if (isShow === 2){
          if (!email) {
            errMsg = '请输入邮箱!';
            return;
          } else if (!password) {
            errMsg = '请输入密码！';
            return;
          }
        }
        this.errMsg = null;
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .personal
    height: 100%
    background-color: #f2f5f4
    position relative
    padding-top px2rem(194)
    &.white
      background-color: #fff
    .logo
      text-align center
      line-height px2rem(310)
      height px2rem(310)
      &.scale
        line-height px2rem(140)
        height px2rem(140)
      img
        width px2rem(250)
        height px2rem(84)
    .loginWay
      margin-left px2rem(42)
      display flex
      flex-direction column
      text-align center
      button
        font-size px2rem(32)
        width px2rem(666)
        height px2rem(88)
        margin-bottom px2rem(40)
        outline none
        background-color: #f2f5f4
        border: 1px solid #b4282d
        color #b4282d
        border-radius px2rem(10)
        &.active
          background-color: #b4282d
          color #fff
        i
          display inline-block
          vertical-align middle
          margin-bottom px2rem(5)
      span
        font-size px2rem(24)
    .loginMethods
      position fixed
      left: 18%
      bottom px2rem(60)
      color #7f7f7f
      i
        font-size px2rem(32)
    .switchLogin
      display flex
      flex-direction column
      padding 0 px2rem(30)
      text-align center
      background-color: #fff
      .verify
        position relative
        input
          width px2rem(670)
          height px2rem(94)
          border-bottom 1px solid #eee
          outline none
        .getCode
          color black
          font-size px2rem(24)
          width px2rem(164)
          height px2rem(64)
          border: 1px solid #000
          border-radius px2rem(10)
          position absolute
          right: px2rem(16)
          top: px2rem(110)
          background-color: #fff
          &.startGetTime
            color #ccd6e3
            border: 1px solid #ccd6e3
      .errMsg
        color #ff0000
        margin-top px2rem(20)
        font-size px2rem(36)
        line-height px2rem(80)
        border: 1px solid #007f5a
      .trouble
        height px2rem(80)
        line-height px2rem(80)
        span
          color #666666
          &:first-child
            float left
          &:nth-child(2)
            float right !important
          &.left
            float left
          &.right
            float right
      button
        font-size px2rem(32)
        width px2rem(666)
        height px2rem(88)
        margin-bottom px2rem(40)
        outline none
        background-color: #f2f5f4
        border: 1px solid #b4282d
        color #b4282d
        border-radius px2rem(10)
        &.active
          background-color: #b4282d
          color #fff

</style>
