
import {
  GET_HOME_DATA,
  
} from './mutation-type'

export default {
  //获取首页数据
  [GET_HOME_DATA] (state,{homeData}) {
    state.homeData = homeData;
    console.log(state.homeData);
  }
}
