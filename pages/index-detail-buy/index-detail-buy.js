// pages/index-detail-buy/index-detail-buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: '周一(4月1日)',
    time: '10:00-11:00',
  },
  selctWeek(e) {
    this.setData({
      week: e.currentTarget.dataset.week
    })
  },
  selectTime(e) {
    console.log(e)
    this.setData({
      time: e.currentTarget.dataset.time
    })
  },
  time_confirm() {
    this.setData({
      popup: false
    });
  },
  onClose() {
    this.setData({
      popup: false
    });
  },
  // 选择时间
  popup(){
    this.setData({
      popup: true
    });
  },
  onLoad: function(options) {

  },
  onShow: function() {
    var pages = getCurrentPages();//获取当前页面js里面的pages里的所有信息。

    var currPage = pages[pages.length - 1]; //
//prevPage 是获取上一个页面的js里面的pages的所有信息。-1当前页面 -2 是上一个页面，-3是上上个页面以此类推。


    console.log(currPage)
  }
})