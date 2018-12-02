
import {
  GET_HOME_DATA,
  GET_BANNER_DATA,
  GET_TOPIC_DATA,
  GET_CATEGORY_DATA,
  
} from './mutation-type'

export default {
  //获取轮播图数据
  [GET_BANNER_DATA] (state,{bannerData}) {
    state.bannerData = bannerData;
  },
  //获取首页数据
  [GET_HOME_DATA] (state,{homeData}) {
    state.homeData = homeData;
    // console.log(state.homeData);
  },
  //获取识物数据
  [GET_TOPIC_DATA] (state,{topicData}) {
    state.topicData = topicData;
  },
  //获取分类数据
  [GET_CATEGORY_DATA] (state,{categoryData}) {
    state.categoryData = categoryData;
  },
}
