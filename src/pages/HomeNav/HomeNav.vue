<template>
  <div class="homeNavScroll">
    <div class="homeNav" v-if="cateListData[navPath]">
      <HomeNavContent :navListData="cateListData[navPath]"/>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
//  import BScroll from 'better-scroll'
  import HomeNavContent from '../../components/HomeNavContent/HomeNavContent.vue'
  export default {
    //发送请求获取数据
    mounted () {
      this._initData();
    },
    components: {
      HomeNavContent,

    },
    computed: {
      ...mapState(['cateListData']),
      navPath () {
        let navPath;
        let path;
         path = this.$route.params.id ;
        navPath = path * 1;
//        console.log(typeof path,path);
//        console.log(typeof navPath, navPath);
        return navPath
      }
    },
    methods: {
      _initData () {
        this.$store.dispatch('getCateListData', () => {
//          this.$nextTick(() => {
//            new BScroll('.homeNavScroll',{
//              click: true
//            });
//          });
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .homeNavScroll
    width 100%
    height px2rem(1086)
    padding-top px2rem(148)
    overflow hidden
    .homeNav
      width 100%
</style>
