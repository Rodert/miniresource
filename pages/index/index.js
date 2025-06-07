// pages/index/index.js
const { resources } = require('../../data/resources.js');

Page({
  data: {
    groupedResources: [],
    loading: true
  },

  onLoad() {
    // 按时间排序并分组资源列表
    const sortedResources = resources.sort((a, b) => {
      return new Date(b.createTime) - new Date(a.createTime);
    });
    
    // 按日期分组
    const grouped = {};
    sortedResources.forEach(resource => {
      const date = resource.createTime;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(resource);
    });

    // 转换为数组格式
    const groupedArray = Object.entries(grouped).map(([date, items]) => ({
      date,
      items
    }));
    
    this.setData({
      groupedResources: groupedArray,
      loading: false
    });
  },

  // 复制资源链接
  onCopyUrl(e) {
    const { url } = e.currentTarget.dataset;
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({
          title: '链接已复制',
          icon: 'success'
        });
      }
    });
  },

  // 跳转到资源详情页
  onResourceTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    });
  },

  // 跳转到搜索页面
  onSearchTap() {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    this.onLoad();
    wx.stopPullDownRefresh();
  }
});