// pages/category/category.js
const { resources, categories } = require('../../data/resources.js');

Page({
  data: {
    categories: [],
    categoryResources: {}
  },

  onLoad() {
    // 初始化分类数据
    this.setData({ categories });
    
    // 按分类组织资源
    const categoryResources = {};
    categories.forEach(category => {
      categoryResources[category.id] = resources.filter(resource => 
        resource.category === category.id
      );
    });
    
    this.setData({ categoryResources });
  },

  // 跳转到资源详情
  onResourceTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  }
});