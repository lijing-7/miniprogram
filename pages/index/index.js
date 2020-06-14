//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [
      { url: "url", title: "政治思想工作的重要性，培养学科核心素养1" },
      { url: "url", title: "政治思想工作的重要性，培养学科核心素养2" },
      { url: "url", title: "政治思想工作的重要性，培养学科核心素养3" }],
    newLists: [
      {img:"/images/index/lunbo1.jpg",text:"重磅！'在经历中学习——疫情防控公开课'隆重上线，欢迎欢迎",data:"2019-08-12",},
      {img:"/images/index/lunbo4.jpg",text:"重磅！'在经历中学习——疫情防控公开课'隆重上线",data:"2019-08-12",}
    ],
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
      // ,{
      //   time:"10:00am",
      //   classname:"马克思主义基本原理概论"
      // }
    ],
    currentTab:0,
    personjoblist:[
      {
        id:"01",
        name:"思修的目的到底是为了什么？上思修可以将一个人的思想修正吗？",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:""
      },
      {
        id:"02",
        name:"为什么要思修为什么为什么为什么？",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:"因为要坚决维护以习近平主席领导下的政策方针，爱党爱国家爱人民的思想要贯彻落实。"
      },{
        id:"03",
        name:"怎样去思修？",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:""
      }
    ],
    groupjoblist:[
      {
        id:"01",
        jobname:"思修的目的到底是为了什么？上思修可以将一个人的思想修正吗？",
        gname:"远在天边",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:""
      },{
        id:"02",
        jobname:"思修的目的到底是为了什么？上思修可以将一个人的思想修正吗？",
        gname:"远在天边",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:""
      },{
        id:"03",
        jobname:"思修的目的到底是为了什么？上思修可以将一个人的思想修正吗？",
        gname:"远在天边",
        stime:"2019-05-13",
        etime:"2019-05-19",
        detail:"jdfgvnxcvlkdflgjkcdv"
      },
    ]
  },
  //滑动切换
    swiperTab:function( e ){
      var that=this;
      that.setData({
        currentTba:e.detail.current
      });
    },
    // 截获竖向滑动
 catchTouchMove:function(res){
    return false
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
  // 个人作业编辑事件
  editmyjob(e){
    console.log( e.currentTarget.dataset.etime);
    console.log(typeof e.currentTarget.dataset.name);
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    var stime = e.currentTarget.dataset.stime;
    var etime = e.currentTarget.dataset.etime;
    var detail = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../individualjobEdit/individualjobEdit?id='+id+'&name='+name+'&stime='+stime+'&etime='+etime+'&detail='+detail,
    })
  },
  // 个人作业查看事件
  checkmyjob(e){
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    var stime = e.currentTarget.dataset.stime;
    var etime = e.currentTarget.dataset.etime;
    var detail = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../individualjobWatch/individualjobWatch?id='+id+'&name='+name+'&stime='+stime+'&etime='+etime+'&detail='+detail,
    })
  },

  // 小组作业编辑事件
  editgroupjob(e){
    console.log( e.currentTarget.dataset.etime);
    console.log(typeof e.currentTarget.dataset.jobname);
    var id = e.currentTarget.dataset.id;
    var jobname = e.currentTarget.dataset.jobname;
    var stime = e.currentTarget.dataset.stime;
    var etime = e.currentTarget.dataset.etime;
    var gname = e.currentTarget.dataset.gname;
    var detail = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../groupjobEdit/groupjobEdit?id='+id+'&jobname='+jobname+'&stime='+stime+'&etime='+etime+'&detail='+detail+'&gname='+gname,
    })
  },
  // 小组作业查看事件
  checkgroupjob(e){
    var id = e.currentTarget.dataset.id;
    var jobname = e.currentTarget.dataset.jobname;
    var stime = e.currentTarget.dataset.stime;
    var etime = e.currentTarget.dataset.etime;
    var gname = e.currentTarget.dataset.gname;
    var detail = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../groupjobWatch/groupjobWatch?id='+id+'&jobname='+jobname+'&stime='+stime+'&etime='+etime+'&detail='+detail+'&gname='+gname,
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this 
    // wx.getSystemInfo({ 
    //     success: function (res) { 
    //         that.setData({ 
    //             clientHeight: res.windowHeight 
    //         }); 
    //     } 
    // }) 

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