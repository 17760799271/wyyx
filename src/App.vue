<template>
  <div class="app">
  <!--<keep-alive>-->
    <router-view/>
  <!--</keep-alive>-->


    <FooterGuide v-if="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    mounted () {
      this.initFooterClass();
    },
    components: {
      FooterGuide,
    },
    methods: {
      initFooterClass () {
        if (this.$route.path != '/home/homepage') {
          this.$store.state.homePath = false;
        }
      }
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
