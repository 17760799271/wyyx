
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import DiscernGoods from '../pages/DiscernGoods/DiscernGoods.vue'
import Category from '../pages/Category/Category.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Homepage from  '../pages/Homepage/Homepage.vue'
Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      // children: [
      //   {
      //     path: '/home/homepage',
      //     component: Homepage,
      //   }
      // ]
    },
    {
      path: '/discernGoods',
      component: DiscernGoods,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/',
      redirect: '/home/homepage',
    },
  ]
  
  
})
