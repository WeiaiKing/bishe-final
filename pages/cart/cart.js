// pages/car/car.js
Page({


  data: {
    checked: true
  },
  onLoad: function (options) {

  },
  goPay() {
    wx.navigateTo({
      url: '/pages/index-detail-buy/index-detail-buy',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})