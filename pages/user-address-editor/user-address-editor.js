// const $api = require("../../../utils/api.js")
Page({
  data: {
    checked: true,
    id: 0,
    isconfirm_build: true,
    index: '',
    // index: 0,
    region: ['', '', ''],
    customItem: '全部'
  },
  // 返回指定页面
  return_index: function () {
    wx.navigateBack({
      delta: 2,
    })
  },
  onChange({ detail }) {
    // 需要手动对 checked 状态进行更新
    this.setData({ checked: detail });
  },
  //点击确认创建招聘
  confirm_build: function () {

  },
  // 获取地址
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function (options) {

  },

  //获取字段
  get_title: function (e) {
    console.log(e.detail.value)
    this.setData({
      title: e.detail.value
    })
  },
})