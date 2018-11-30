
import {
  reqHomeData
  
} from '../api'
import {
  GET_HOME_DATA,
  
} from './mutation-type'
export default {
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
