// pages/car/car.js
Page({
  data: {
    total:0,
    select_num:2,
    checked:false,
    cart_list:[{
      id:1,
      img_url: 'https://img3.doubanio.com/view/subject/s/public/s28280051.jpg',
      title:'新东方·恋恋有词',
      editor:'朱伟 / 唐迟',
      price:'21.8',
      select_num:2
    }]
  },
  onLoad: function (options) {

  },
  // 选择数量
  selectNum(e){
    this.setData({
      select_num:e.detail,
    })
    if(this.data.checked){
      this.setData({
        total: e.currentTarget.dataset.price * e.detail
      })
    }
    console.log(e.detail);
  },
  // check
  selectChange(e){
    if(this.data.checked){
      this.setData({
        checked: false,
        total: 0
      })
    }else{
      this.setData({
        checked: true,
        total: e.currentTarget.dataset.checkedid[0] * e.currentTarget.dataset.checkedid[1]
      })
    }
  },
  goPay() {
    if (this.data.checked) {
    wx.navigateTo({
      url: '/pages/index-detail-buy/index-detail-buy',
      success: function (res) { },
    })
    } else {
      wx.showToast({
        title: '请选择需要购买的书籍',
        icon: 'none',
        // image: '/images/1.png',
        duration: 2000
      })
    }
  },
  goDetail(){
      wx.navigateTo({
        url: '/pages/index-detail/index-detail',
        success: function (res) { },
      })
  }
})