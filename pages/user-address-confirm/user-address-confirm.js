
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function(options) {
    
  },
  goback(e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      mydata: { id: e.currentTarget.dataset.id}
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})