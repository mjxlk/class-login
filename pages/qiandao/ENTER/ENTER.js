Page({
  data: {
  },

  onLoad: function () {
    var that = this
    that.setData({
      number: getApp().globalData.number,
      ENTER: getApp().globalData.ENTER,
      LEFT: getApp().globalData.LEFT
    })
  },


})