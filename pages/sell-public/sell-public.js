//index.js
//获取应用实例
const app = getApp()
// 扫码卖书列表
let scan_list = [];
Page({
  data: {
    result: '',
  },
  onLoad: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res);
        var result = res.result;
        this.setData({
          result: result,
        });
        wx.request({
          url: "https://api.douban.com/v2/book/isbn/" + result + '?apikey=0b2bdeda43b5688921839c8ecb20399b',
          method: 'get',
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          success: (res) => {
            scan_list.push(res.data)
            this.setData({
              scan_list
            })
          }
        })
      }
    })
  },
  goPhace() {
    wx.navigateTo({
      url: '../sell-phace/sell-phace',
      success: function (res) { },
    })
  }

})