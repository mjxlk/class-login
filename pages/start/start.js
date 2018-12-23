// start.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getDataFromOneNetNumber: function(){
    var that=this
    //从oneNET请求我们的人数变化的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503069569/datapoints?datastream_id=number,ENTER,LEFT&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'kVA2A7AdaLPgYqH7M6IabXLn=jI='
      },
      success: function (res) {
        console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.number = res.data.data.datastreams[0]
        app.globalData.LEFT = res.data.data.datastreams[1]
        app.globalData.ENTER = res.data.data.datastreams[2]
        console.log(app.globalData.LEFT)
        //跳转到number页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../qiandao/number/number',
        })
       
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },
 
  getDataFromOneNetENTER: function () {
    var that = this
    //从oneNET请求我们的人数变化的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503069569/datapoints?datastream_id=number,ENTER,LEFT&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'kVA2A7AdaLPgYqH7M6IabXLn=jI='
      },
      success: function (res) {
        console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.number = res.data.data.datastreams[0]
        app.globalData.LEFT = res.data.data.datastreams[1]
        app.globalData.ENTER = res.data.data.datastreams[2]
        console.log(app.globalData.LEFT)
        //跳转到ENTER页面
        wx.navigateTo({
          url: '../qiandao/ENTER/ENTER',
        })

      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },


  getDataFromOneNetLEFT: function () {


    var that = this
    //从oneNET请求我们的人数变化的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/503069569/datapoints?datastream_id=number,ENTER,LEFT&limit=15',
      header: {
        'content-type': 'application/json',
        'api-key': 'kVA2A7AdaLPgYqH7M6IabXLn=jI='
      },
      success: function (res) {
        console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.number = res.data.data.datastreams[0]
        app.globalData.LEFT = res.data.data.datastreams[1]
        app.globalData.ENTER = res.data.data.datastreams[2]
        console.log(app.globalData.LEFT)
        //跳转到LEFT页面
        wx.navigateTo({
          url: '../qiandao/LEFT/LEFT',
        })

      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var app = getApp()
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    });
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
