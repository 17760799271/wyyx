
export default {
  //筛选出四个数据
  getTagList (state) {
    let {tagList} = state.homeData;
    tagList = tagList ? tagList : [];
    let tagData = [];
    tagList.filter((shopTag, index) => {
      if (index > 3) {
        return;
      }
      tagData.push(shopTag);
    });
    return tagData;
  }
}
