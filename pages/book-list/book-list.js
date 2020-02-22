// pages/book-list/book-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_list:[
      {
        name:"海洋学院",
        id:1
      },
      {
        name: "海运学院",
        id: 2
      },
      {
        name: "机船学院",
        id: 3
      },
      {
        name: "石化学院",
        id: 4
      },
      {
        name: "食品学院",
        id: 5
      },
      {
        name: "电信学院",
        id: 6
      },
      {
        name: "资环学院",
        id: 7
      },
      {
        name: "人文学院",
        id: 8
      },

      {
        name: "经管学院",
        id: 9
      },
      {
        name: "教育学院",
        id: 10
      },
      {
        name: "陶设学院",
        id: 11
      },
      {
        name: "理学院",
        id: 12
      },
      {
        name: "建工学院",
        id: 13
      },
      {
        name: "外国语学院",
        id: 14
      },
      {
        name: "马克思主义学院",
        id: 15
      },
    ]
  },
  go_book_detail(){
    console.log("kk")
    wx.navigateTo({
      url: '../book-list-detail/book-list-detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})