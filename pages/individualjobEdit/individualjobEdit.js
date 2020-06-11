// pages/individualjobEdit/individualjobEdit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    filename:'',
    images: [],
    max:200,
  }, 
  //文本域字数限制
  inputs:function(e){
    var value = e.detail.value;
    var  len = parseInt(value.length);
    if(len > this.data.max )return;
    this.setData({
      currentWordNumber:len
    });
    if(this.data.currentWordNumber == 200){
      wx.showModal({
        title: '提示',
        content: '您输入字数已达上限！',
      })
    }

  },
  //上传文件
  uploadfile:function(){
      var ths = this;
      wx.chooseMessageFile({
        type:'file',
        success(res){
          const tempFilePaths = res.tempFilePaths
          console.log('显示信息',res)
          console.log("显示个啥1："+res.tempFiles[0].name)
          ths.setData({
            filename : res.tempFiles[0].name
          })
          wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              // 'user': 'test'
            },
            success (res){
              const data = res.data
              //do something
            }
          })
        }
      })
  },
//上传图片
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        // 限制最多只能留下3张照片
        const images1 = images.length <= 4 ? images : images.slice(0, 4)
        this.setData({
          images: images1
        })
      }
    })
  },
  removeImage(e) {
    var that = this;
    var images = that.data.images;
    // 获取要删除的第几张图片的下标
    const idx = e.currentTarget.dataset.idx
    // splice  第一个参数是下表值  第二个参数是删除的数量
    images.splice(idx,1)
    this.setData({
      images: images
    })
  },
  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx],  //当前预览的图片
      urls: images,  //所有要预览的图片
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    var name = options.name;
    var stime = options.stime;
    var etime = options.etime;
    var detail = options.detail;
    var detail = options.detail;
    that.setData({
      id : id,
      name : name,
      stime : stime,
      etime : etime,
      detail : detail,
    })


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