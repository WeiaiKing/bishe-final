const $api = require("../../utils/api.js")
const $wx = require('../../utils/wx.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false, //是否弹框（授权）
  },
  onAuth2: function (e) {
    if (e.detail.userInfo) {
      this.onClose()
      this.setData({
        userInfo: e.detail.userInfo
      })
    }
    $wx.auth2(e)

  },
  onClose() {
    this.setData({
      show: false
    });
  },
  onLoad: function() {
    
  },
  onShow(){
    if (wx.getStorageSync('userInfo')) {
      this.setData({
        userInfo: wx.getStorageSync('userInfo'),
        show: false,
      })
    } else {
      this.setData({
        show: true,
      })
    }
  }
})