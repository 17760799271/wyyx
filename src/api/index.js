
import ajax from './ajax'

//请求homedata
export const reqHomeData = () => ajax('/homedata');
//请求识物数据
export const reqTopicData = () => ajax('/topicdata');
