//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好，呆呆',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    value: 0,
    styles: {
      line: '#dbdbdb',
      bginner: '#fbfbfb',
      bgoutside: '#dbdbdb',
      lineSelect: '#52b8f5',
      font: '#404040'
    }
  },
  bindvalue: function (e) {
    // console.log(e)
    this.setData({
      value: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
