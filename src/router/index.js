
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
      meta: {
        isShowFooter: true
      },
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
      meta: {
        isShowFooter: true
      },
    },
    {
      path: '/category',
      component: Category,
      meta: {
        isShowFooter: true
      },
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isShowFooter: true
      },
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
