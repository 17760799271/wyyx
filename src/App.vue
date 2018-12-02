<template>
  <div class="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      FooterGuide,

    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixins.styl"
  .app
    width: 100%
    height: 100%
    box-sizing border-box
    overflow hidden
</style>
