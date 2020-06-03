//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    todayclasslist:[
      // 《思想道德修养与法律基础》、《马克思主义基本原理概论》、《毛泽东思想和中国特色社会主义理论体系概论》、《中国近现代史纲要》、《形势与政策》
      {
        time:"8:00am",
        classname:"形势与政策"
      }
      ,{
        time:"14:00am",
        classname:"毛泽东思想和中国特色社会主义理论体系概论"
      }
      ,{
        time:"10:00am",
        classname:"马克思主义基本原理概论"
      }
    ],
    currentTab:0,
  },
  //滑动切换
    swiperTab:function( e ){
      var that=this;
      that.setData({
        currentTba:e.detail.current
      });
    },
  //点击切换
  clickTab: function( e ) { 
    var that = this; 
    if( this.data.currentTab === e.target.dataset.current ) { 
    return false; 
    } else { 
    that.setData( { 
      currentTab: e.target.dataset.current 
    }) 
    } 
  }, 
  //进入课堂  查看数据类型typeof
  entryclass(e){
    console.log('进入课堂');
    console.log(typeof e.currentTarget.dataset.classtime);
    console.log(e.currentTarget.dataset.classname);
    var ctime = e.currentTarget.dataset.classtime;
    var cname = e.currentTarget.dataset.classname;
    wx.navigateTo({
      url: '../class/class?ctime='+ctime+'&cname='+cname,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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