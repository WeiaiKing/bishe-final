// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kkk:true,
    background: ['https://picsum.photos/700', 'https://picsum.photos/400', 'https://picsum.photos/800'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  kkk(){
    this.setData({
      kkk: false
    })
  },
  go_book_list_detail(){
    wx.navigateTo({
      url: '../book-list-detail/book-list-detail',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})