
import {
  reqHomeData
  
} from '../api'
import {
  GET_HOME_DATA,
  GET_BANNER_DATA,
  
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
  }
}
