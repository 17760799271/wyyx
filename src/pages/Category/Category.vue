<template>
  <div class="category" v-if="categoryData[itemIndex]">
    <header class="header">
      <div class="search">
        <img src="../../common/images/search.png" alt="">
        <input type="text" placeholder="搜索商品，共10005款好物">
      </div>
    </header>
    <div class="categoryContent">
      <div class="listScroll">
        <ul class="categoryList">
          <li v-for="(category, index) in categoryData" :key="index" @click="showItem(index)" :class="{active: itemIndex === index}">{{category.name}}</li>
        </ul>
      </div>
      <div class="contentDetail">
        <img :src="getTitleImg" alt=""> <br>
        <div class="title">
          <span>-- {{getTitle}} --</span>
        </div>
        <div class="contentListScroll">
          <ul class="contentList">
          <li v-for="(item, index) in categoryData[itemIndex].subCateList" :key="index">
            <img :src="item.wapBannerUrl"> <br>
            <span class="ellipsis">{{item.name}}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        itemIndex: 0,
      }
    },
    mounted () {
      this._listScroll();//初始化list拖拽
    },
    computed: {
      ...mapState(['categoryData']),
      subCateList () {
          let cateList = [];
          const {itemIndex, categoryData} = this;
          cateList = categoryData[itemIndex].subCateList;
          return cateList;
      },
      //获取当前index标题图片
      getTitleImg () {
        const {itemIndex, categoryData} = this;
          return categoryData[itemIndex].bannerUrl
      },
      //获取当前index标题文字
      getTitle () {
        const {itemIndex, categoryData} = this;
        return categoryData[itemIndex].name
      }
    },
    methods: {
      //初始化list拖拽
      _listScroll () {
        this.$store.dispatch('getCategoryData', () => {
          this.$nextTick(() => {
            new BScroll('.listScroll',{
              scrollY: true,
              click: true
            });
          });
          //右侧ul拖拽
          this.$nextTick(() => {
            new BScroll('.contentListScroll',{
              scrollY: true,
              click: true
            });
          });
        });
      },
      //传递需要遍历的索引
      showItem (index) {
        this.itemIndex = index;
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .category
    height: 100%
    position relative
    .header
      height px2rem(56)
      padding px2rem(20) px2rem(32)
      border-bottom 2px solid #f4f4f4
      position relative
      z-index 100
      background-color: #fff
      .search
        width px2rem(690)
        height 100%
        background-color: #ededed
        text-align center
        line-height px2rem(56)
        font-size px2rem(28)
        input
          background-color: #ededed
        img
          vertical-align middle
    .categoryContent
      height 100%
      .listScroll
        height px2rem(1136)
        float left
        .categoryList
          width px2rem(162)
          border-right 2px solid #f4f4f4
          li
            width 100%
            height px2rem(100)
            text-align center
            line-height px2rem(100)
            font-size px2rem(26)
            &.active
              font-size px2rem(32)
              color #ab2b2b
              border-left px2rem(8) solid #ab2b2b
      .contentDetail
        width px2rem(586)
        float right
        padding px2rem(30)
        box-sizing border-box
        >img
          width px2rem(528)
          height px2rem(194)
        .title
          text-align center
          >span
            font-size px2rem(28)
            line-height px2rem(80)
      .contentListScroll
        height px2rem(820)
        overflow hidden
        .contentList
          width 100%
          clearFix()
          li
            display flex
            flex-direction column
            float left
            margin-right px2rem(31)
            margin-bottom px2rem(50)
            border-radius 50%
            >img
              width px2rem(144)
              height px2rem(144)
            >span
              text-align center
              display inline-block
              width px2rem(144)
              font-size px2rem(26)
              color #333333
</style>
