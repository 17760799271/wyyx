
import {
  reqHomeData,
  reqTopicData,
  reqCategoryData,
  
} from '../api'
import {
  GET_HOME_DATA,
  GET_BANNER_DATA,
  GET_TOPIC_DATA,
  GET_CATEGORY_DATA,
  GET_CATELIST_DATA,
  
} from './mutation-type'
export default {
  //获取轮播图数据
  async getBannerData ({commit},cb) {
    const res = await reqHomeData();
    if (res.code === 0) {
      const bannerData = res.data.focusList;
      commit(GET_BANNER_DATA, {bannerData});
      typeof cb === 'function' && cb();
    }
  },
  //获取首页数据
  async getHomeData ({commit},cb) {
    const res = await reqHomeData();
    if (res.code === 0) {
      const homeData = res.data;
      commit(GET_HOME_DATA, {homeData});
      typeof cb === 'function' && cb();
    }
  },
  //请求识物数据
  async getTopicData ({commit},cb) {
    const res = await reqTopicData();
    if (res.code === 0) {
      const topicData = res.data;
      commit(GET_TOPIC_DATA, {topicData});
      typeof cb === 'function' && cb();
    }
  },
  //请求分类数据
  async getCategoryData ({commit},cb) {
    const res = await reqCategoryData();
    if (res.code === 0) {
      const categoryData = res.data;
      commit(GET_CATEGORY_DATA, {categoryData});
      typeof cb === 'function' && cb();
    }
  },
  //获取首页nav数据
  async getCateListData ({commit},cb) {
    const res = await reqHomeData();
    if (res.code === 0) {
      const cateListData = res.data.cateList;
      commit(GET_CATELIST_DATA, {cateListData});
      typeof cb === 'function' && cb();
    }
  },
  //解决加载nav
  async waitData ({commit},cb) {
    const res = await reqHomeData();
    if (res.code === 0) {
      const cateListData = res.data.cateList;
      typeof cb === 'function' && cb();
    }
  },
}
