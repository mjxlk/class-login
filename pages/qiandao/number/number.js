

var myCharts = require("../../../utils/wxcharts.js")//引入一个绘图的插件
var lineChart_hum = null
var lineChart_LEFT = null
var lineChart_number = null
var app = getApp()

Page({
  data: {
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
  },


  //把拿到的数据转换成绘图插件需要的输入格式
  convert: function () {
    var categories = [];
    var ENTER = [];
    var LEFT = [];
    var number = [];

    var length = app.globalData.LEFT.datapoints.length
    for (var i = 0; i < length; i++) {
      categories.push(app.globalData.ENTER.datapoints[i].at.slice(11,19));
      ENTER.push(app.globalData.ENTER.datapoints[i].value);
      LEFT.push(app.globalData.LEFT.datapoints[i].value);
      number.push(app.globalData.number.datapoints[i].value);
    }
    return {
      categories: categories,
      ENTER: ENTER,
      LEFT: LEFT,
      number: number
    }
  },

  onLoad: function () {
    var wheatherData = this.convert();
    var that=this
    that.setData({
      number: getApp().globalData.number,
      ENTER: getApp().globalData.ENTER,
      LEFT: getApp().globalData.LEFT
    })

    //得到屏幕宽度
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var wheatherData = this.convert();


    //新建人数图表
    lineChart_number = new myCharts({
      canvasId: 'number',
      type: 'line',
      categories: wheatherData.categories,
      animation: true,
      background: '	#030303',
      series: [{
        name: 'number',
        data: wheatherData.number,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: 'number (人)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 24
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },

  
})
