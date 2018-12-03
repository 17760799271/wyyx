<template>
  <section class="home">
    <header class="header">
      <div class="headerTop">
        <h1 class="logo"><img src="../../common/images/indexLogo-11d65342f9.png" alt=""></h1>
        <div class="search">
          <i class="loupe"></i>
          <span>搜索商品，共10719款好物</span>
        </div>
        <button class="btn" @click="$router.push('/personal')">登录</button>
      </div>
      <div class="headerNav">
        <ul class="navList">
          <li :class="{active: $route.path === '/home/homepage'}" >
            <router-link to="/home">
              <span>推荐</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/0'}">
            <router-link to="/home/homeNav/0">
              <span>居家</span>
            </router-link>
          </li>
          <li class="shoe" :class="{active: $route.path === '/home/homeNav/1'}">
            <router-link to="/home/homeNav/1">
              <span>鞋包配饰</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/2'}">
            <router-link to="/home/homeNav/2">
              <span>电器</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/3'}">
            <router-link to="/home/homeNav/3">
              <span>洗护</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/4'}">
            <router-link to="/home/homeNav/4">
              <span>饮食</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/5'}">
            <router-link to="/home/homeNav/5">
              <span>餐厨</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/6'}">
            <router-link to="/home/homeNav/6">
              <span>婴童</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/7'}">
            <router-link to="/home/homeNav/7">
              <span>文体</span>
            </router-link>
          </li>
          <li :class="{active: $route.path === '/home/homeNav/8'}">
            <router-link to="/home/homeNav/8">
              <span>服装</span>
            </router-link>
          </li>
          <li class="shoe" :class="{active: $route.path === '/home/homeNav/9'}">
            <router-link to="/home/homeNav/9">
              <span>特色区</span>
            </router-link>
          </li>
        </ul>
        <div class="arrows">
        </div>
      </div>
    </header>
    <!--<keep-alive>-->
      <router-view/>
    <!--</keep-alive>-->





  </section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Homepage from '../Homepage/Homepage.vue'
  export default {
    mounted () {
      this.$nextTick(() => {
        this._navScroll();
      });
      if (this.$route.path === '/home/homepage') {
        this.$store.state.homePath = true;
      }
    },
    data () {
      return {

      }
    },
    components: {
      Homepage
    },
    methods: {
      _navScroll () {
        const navScroll = new BScroll('.headerNav',{
          scrollX: true,
          scrollY: false,
          click: true
        });
      },

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .home
    height: 100%
    .header
      width: 100%
      height px2rem(148)
      position fixed
      top: 0
      left: 0
      background-color: #fff
      z-index 5
      .headerTop
        height px2rem(88)
        display flex
        padding px2rem(16) px2rem(30)
        box-sizing border-box
        .logo
          width px2rem(138)
          height px2rem(40)
          margin-top px2rem(8)
          margin-right px2rem(16)
          img
            width px2rem(138)
            height px2rem(40)
        .search
          color #666666
          width px2rem(442)
          height px2rem(56)
          background-color: #ededed
          border-radius px2rem(10)
          line-height px2rem(56)
          .loupe
            display inline-block
            width px2rem(28)
            height  px2rem(28)
            background-image url("../../common/images/search2-2fb94833aa.png")
            background-repeat no-repeat
            background-size: px2rem(28) px2rem(28)
            vertical-align middle
            margin-left px2rem(40)
        .btn
          outline none
          font-size px2rem(24)
          width px2rem(74)
          height  px2rem(40)
          color #b4282d
          border: 1px solid #b4282d
          background-color: #fff
          border-radius px2rem(6)
          margin-top px2rem(8)
          margin-left px2rem(16)
      .headerNav
        height px2rem(60)
        .navList
          width 170%
          height px2rem(60)
          background-color: #fff
          display flex
          li
            width px2rem(80)
            height px2rem(60)
            margin-left px2rem(20)
            line-height px2rem(60)

            /*float left*/
            text-align center
            position relative
            color #666666
            &.shoe
              width px2rem(130)
            &.active
              color #b4282d
            &.active:after
              content ''
              position absolute
              left 0
              bottom 0
              width 100%
              height px2rem(5)
              background-color #b4282d
            span
              font-size px2rem(28)
        .arrows
          width px2rem(100)
          height  px2rem(60)
          position fixed
          top: px2rem(88)
          right: 0
          background-image url("../../common/images/goToTop-7a19216f77.png")
          background-repeat no-repeat
          background-color: #fff
          background-position center
          background-size  px2rem(50) px2rem(50)
</style>
