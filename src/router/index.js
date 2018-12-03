
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../pages/Home/Home.vue'
// import DiscernGoods from '../pages/DiscernGoods/DiscernGoods.vue'
// import Category from '../pages/Category/Category.vue'
// import Cart from '../pages/Cart/Cart.vue'
// import Personal from '../pages/Personal/Personal.vue'
// import Homepage from  '../pages/Homepage/Homepage.vue'
// import HomeNav from  '../pages/HomeNav/HomeNav.vue'
import FirstPage from '../components/FirstPage/FirstPage.vue'


const Home = () => import('../pages/Home/Home.vue');
const DiscernGoods = () => import('../pages/DiscernGoods/DiscernGoods.vue');
const Category = () => import('../pages/Category/Category.vue');
const Cart = () => import('../pages/Cart/Cart.vue');
const Personal = () => import('../pages/Personal/Personal.vue');
const Homepage = () => import('../pages/Homepage/Homepage.vue');
const HomeNav = () => import('../pages/HomeNav/HomeNav.vue');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/firstPage',
    },
    {
      path: '/firstPage',
      component: FirstPage,
    },
    //    home路由
    {
      path: '/home',
      redirect: '/home/homepage',
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShowFooter: true
      },
      children: [
        {
          path: '/home/homepage',
          component: Homepage,
          meta: {
            isShowFooter: true
          }
        },
        {
          path: '/home/homeNav/:id',
          component: HomeNav,
          meta: {
            isShowFooter: true
          }
        },
      ]
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

  ]
  
  
})
