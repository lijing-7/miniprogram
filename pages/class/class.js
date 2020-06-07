// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: 'active',
        name: '活动',
        open: false,
        pages: [
          {
            name:'小组讨论',
            pagesname:'individualjob'
          },{
            name:'头脑风暴',
            pagesname:'groupjob'
          } ,{
            name:'签到',
            pagesname:'groupjob'
          },{
            name:'抢答',
            pagesname:'groupjob'
          }
        ]
    },
    {
        id: 'job',
        name: '作业',
        open: false,
        pages: [
          {
            name:'个人作业',
            pagesname:'individualjob'
          },{
            name:'小组作业',
            pagesname:'groupjob'
          }]
       
    },
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
        if (list[i].id == id) {
            list[i].open = !list[i].open
        } else {
            list[i].open = false
        }
    }
    this.setData({
        list: list
    });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var ctime = options.ctime;
    var cname = options.cname;
    that.setData({
      ctime : ctime,
      cname : cname
    })
    console.log(that.data.ctime)
    console.log(that.data.cname)
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