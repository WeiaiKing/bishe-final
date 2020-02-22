// const $api = require("../../../utils/api.js")
Page({
  data: {
    checked: true,

    id: 0,
    isconfirm_build: true,

    index: '',

    index_education: '',

    index_experience: '',

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
    setTimeout(() => {
      $api.recruitment.create({
        token: wx.getStorageSync("token"),
        title: this.data.title, // 招聘岗位
        company: this.data.company, // 公司名称
        compensation: this.data.salary[this.data.index], // 薪资
        province: this.data.region[0], // 省份
        city: this.data.region[1], // 城市
        district: this.data.region[2], // 区
        work_address: this.data.work_address, // 工作地址
        education: this.data.education[this.data.index_education], // 学历
        work_years: this.data.experience[this.data.index_experience], // 工作经验
        email: this.data.email, //邮箱
        contents: this.data.contents, // 职业描述
        choice: 0,
        id: this.data.id
      }).then((create) => {
        if (create.msg == "表单验证失败") {
          wx.showModal({
            title: '温馨提示',
            content: '请检查表单是否正确填写完毕',
          })

        } else {
          this.setData({
            isconfirm_build: false,
            form_msg: ''
          })
        }
        console.log(create.msg)
      })
    }, 100)
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onLoad: function (options) {
    console.log(options)
    wx.request({
      url: 'https://nnitq.yuhuofei.cn/api/recruitment/create',
      method: 'get',
      data: {
        token: wx.getStorageSync("token"),
        id: options.id,
        choice: 1
      },
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        let region = [res.data.data.target.province, res.data.data.target.city, res.data.data.target.district]

        this.setData({
          title: res.data.data.target.title, // 招聘岗位
          email: res.data.data.target.email, //邮箱
          work_address: res.data.data.target.work_address, // 公司地址
          contents: res.data.data.target.contents, // 职业描述
          company: res.data.data.target.company, // 公司名称
          id: options.id,
          modify: res.data.data.target,
          region,
          index: this.data.salary.indexOf(res.data.data.target.compensation),
          index_education: this.data.education.indexOf(res.data.data.target.education),
          index_experience: this.data.experience.indexOf(res.data.data.target.work_years),
        })
        console.log(res.data.data.target)
      }
    })
  },
  onShow: function () { },
  //公司名称
  get_company: function (e) {
    console.log(e.detail.value)
    this.setData({
      company: e.detail.value
    })
  },
  //招聘岗位
  get_title: function (e) {
    console.log(e.detail.value)
    this.setData({
      title: e.detail.value
    })
  },
  // 工作地点
  get_work_address: function (e) {
    console.log(e.detail.value)
    this.setData({
      work_address: e.detail.value
    })
  },
  // 学历
  get_education: function (e) {
    console.log(e.detail.value)
    this.setData({
      education: e.detail.value
    })
  },
  // 工作经验
  get_work_years: function (e) {
    console.log(e.detail.value)
    this.setData({
      work_years: e.detail.value
    })
  },
  // 岗位薪资
  get_compensation: function (e) {
    console.log(e.detail.value)
    this.setData({
      compensation: e.detail.value
    })
  },
  // 邮箱
  get_mailbox: function (e) {
    console.log(e.detail.value)
    this.setData({
      email: e.detail.value
    })
  },
  //职业描述
  get_contents: function (e) {
    console.log(e.detail.value)
    this.setData({
      contents: e.detail.value
    })
  },
})