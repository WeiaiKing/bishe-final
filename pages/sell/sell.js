//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: '',
    img: '',
    author: '',
    rating: '',
    price: '',
    subtitle: '',
    title: '',
    open: 1,
    open_icon: 1,
    activeNames: ''
  },
  onChange(event) {
    console.log(event.detail)
    this.setData({
      activeNames: event.detail
    });
  },
  open: function (e) {
    console.log(e.target.dataset.id)
    if (e.target.dataset.id == 1) {
      this.setData({
        open: 0
      })
    } else {
      this.setData({
        open: 1
      })
    }
    console.log("触发了")
  },
  open_icon: function (e) {
    console.log(e.target.dataset.id)
    if (e.target.dataset.id == 1) {
      this.setData({
        open_icon: 0
      })
    } else {
      this.setData({
        open_icon: 1
      })
    }
    console.log("触发了")
  },
  onLoad: function () {

  },

  getScancode: function () {
    // var _this = this;
    // 允许从相机和相册扫码
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
            this.setData({
              img: res.data.images.small,
              author: res.data.author,
              rating: res.data.rating.average,
              price: res.data.price,
              title: res.data.title,
              subtitle: res.data.subtitle
            })
            console.log(res)
            console.log(res.data.subtitle)
          }
        })
      }
    })

  }

})