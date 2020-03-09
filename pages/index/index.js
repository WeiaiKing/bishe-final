const $api = require("../../utils/api.js")
const $wx = require('../../utils/wx.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    background: ['https://picsum.photos/700', 'https://picsum.photos/400', 'https://picsum.photos/800'],
  },
  onAuth2: function(e) {
    console.log(e)
    wx.setStorage({
      key: 'userInfo',
      data: e.detail.userInfo,
    })
    $wx.auth2(e)
  },
  input() {
    wx.navigateTo({
      url: '../index-search/index-search',
      success: function(res) {},
    })
  },
  onLoad: function(options) {
  },
  go_book_list() {
    wx.navigateTo({
      url: '../book-list/book-list',
      success: function(res) {},
    })
  },
  go_book_list_detail() {
    wx.navigateTo({
      url: '../book-list-detail/book-list-detail',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})