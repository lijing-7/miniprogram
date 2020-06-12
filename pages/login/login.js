// pages/login/login.js
// pages/login/login.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    array: ['天津大学', '天津南开大学', '天津工业大学', '天津理工大学'],
    index: 0,
    selected:'',
    disabled:false,
    sch:'',
    no:'',
    pwd:'',
    schinput:false,
    noinput:false,
    pwdinput:false,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let index = e.detail.value
    let array = this.data.array
    this.setData({
      index,
      selected: array[index]
    })
  },
  schinput:function(e){
    wx.hideKeyboard({
      complete: (res) => {
        console.log('hideKeyboard res', res)
      },
    })
    this.setData({sch:e.detail.value});
    this.setData({schinput:true});
    if(this.data.schinput==true && this.data.pwdinput==true&& this.data.noinput==true){
      this.setData({ disabled: false });
    }
  },
  noinput:function(e){
    this.setData({no:e.detail.value});
    this.setData({noinput:true});
    if(this.data.noinput==true && this.data.pwdinput==true){
      this.setData({ disabled: false });
    }
  },
  pwdinput: function (e) {
    this.setData({ pwd: e.detail.value });
    this.setData({ pwdinput: true });
    if (this.data.noinput == true && this.data.pwdinput == true) {
      this.setData({ disabled: false });
    }
  },
  navitohome: function(e){
      wx.switchTab({
        url: '../index/index',
      })

  },
  formSubmit: function (e) {
    // wx.showLoading({
    //   title: '登录中...',
    // })
    console.log(e);
    this.setData({ disabled: true});
    
    // wx.request({
    //   url: app.globalData.url.login, //仅为示例，并非真实的接口地址
    //   data: {
    //     no: e.detail.value.no,
    //     pwd: e.detail.value.pwd
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res);
    //     if (res.statusCode == 200) {
    //       if (res.data.error == true) {
    //         wx.showToast({
    //           title: res.data.msg,
    //           icon: 'none',
    //           duration: 2000
    //         })
    //       } else {
    //         wx.setStorageSync('student', res.data.data);
    //         wx.showToast({
    //           title: res.data.msg,
    //           icon: 'success',
    //           duration: 2000
    //         })
    //         setTimeout(function(){
    //           wx.switchTab({
    //             url: '../teacher/teacher',
    //           })
    //         },2000)
    //       }
    //     }else{
    //       wx.showToast({
    //         title: '服务器出现错误',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({disabled:false});
    var student = wx.getStorageSync('student');
    if (typeof (student) == 'object' && student.no != '' && student.classid != '') {
      wx.switchTab({
        url: '../teacher/teacher',
      })
    }
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
    if(this.data.no=='' || this.data.pwd==''){
      this.setData({ disabled: true });
    }else{
      this.setData({ disabled: false });
    }
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