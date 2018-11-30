import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Piece from './components/Piece/Piece.vue'
import store from './store'
import './mock/mockServer'


Vue.component('Piece', Piece);//注册公共块组件

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
