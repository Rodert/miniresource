// pages/search/search.js
const { resources } = require('../../data/resources.js');

Page({
  data: {
    keyword: '',
    searchResults: [],
    searching: false
  },

  // 输入搜索关键词
  onInput(e) {
    const keyword = e.detail.value.trim();
    this.setData({ keyword });
    if (keyword) {
      this.search(keyword);
    } else {
      this.setData({ searchResults: [] });
    }
  },

  // 执行搜索
  search(keyword) {
    this.setData({ searching: true });
    
    // 搜索标题、描述和标签
    const results = resources.filter(resource => {
      const searchTarget = [
        resource.title.toLowerCase(),
        resource.description.toLowerCase(),
        ...resource.tags.map(tag => tag.toLowerCase())
      ].join(' ');
      return searchTarget.includes(keyword.toLowerCase());
    });

    this.setData({
      searchResults: results,
      searching: false
    });
  },

  // 清空搜索
  onClear() {
    this.setData({
      keyword: '',
      searchResults: []
    });
  },

  // 跳转到资源详情
  onResourceTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
});