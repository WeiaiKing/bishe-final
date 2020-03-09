// pages/start_detail/start_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNames: ['1'],
    select: 1,
    cartNum:5
  },
  // select
  select(e) {
    console.log(e)
    this.setData({
      select: e.currentTarget.dataset.id
    })
  },
  //panel
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },
  // 记步数
  onStepNum(event) {
    console.log(event.detail);
  },
  //add_cart
  add_cart: function() {
    this.setData({
      add_cart: true
    });
  },
  add_buy: function() {
    this.setData({
      select: 1,
      add_buy: true
    });
  },

  add_cart_cloce() {
    this.setData({
      add_cart: false
    });
  },
  add_buy_cloce() {
    this.setData({
      add_buy: false
    });

  },
  cart_confirm() {
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
    this.setData({
      cartNum:this.data.cartNum+1,
      add_cart: false
    });
  },
  buy_confirm() {
    wx.navigateTo({
      url: '../index-detail-buy/index-detail-buy',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


})