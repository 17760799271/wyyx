
import ajax from './ajax'

//请求homedata
export const reqHomeData = () => ajax('/homedata');
//请求识物数据
export const reqTopicData = () => ajax('/topicdata');
//请求分类数据
export const reqCategoryData = () => ajax('/navdata');
