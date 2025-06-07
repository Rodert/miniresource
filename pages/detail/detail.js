// pages/detail/detail.js
const { resources } = require('../../data/resources.js');

Page({
  data: {
    resource: null
  },

  onLoad(options) {
    const { id } = options;
    // 查找对应的资源
    const resource = resources.find(item => item.id === parseInt(id));
    
    if (resource) {
      this.setData({ resource });
      // 设置页面标题
      wx.setNavigationBarTitle({
        title: resource.title
      });
    } else {
      wx.showToast({
        title: '资源不存在',
        icon: 'error'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 复制链接
  copyUrl() {
    const { resource } = this.data;
    wx.setClipboardData({
      data: resource.url,
      success() {
        wx.showToast({
          title: '链接已复制',
          icon: 'success'
        });
      }
    });
  },

  // 在浏览器中打开
  openUrl() {
    const { resource } = this.data;
    wx.setClipboardData({
      data: resource.url,
      success() {
        wx.showModal({
          title: '提示',
          content: '链接已复制，请在浏览器中打开',
          showCancel: false
        });
      }
    });
  }
});