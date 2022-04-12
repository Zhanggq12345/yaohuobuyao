// index.js
// 获取应用实例
// const util = require('/utils/util.js');
let util= require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    motto: '',
    srcimgpath: '/images/liwuhe.jpeg',
    dajishi:'',

  },
  // 事件处理函数
  bindViewTap() {
    ft.navigateTo({
      url: '../logs/logs'
    })
  },



  // //打开礼物盒方法
   bindOpenBox(){
    
    let imgdex =Math.floor(6*Math.random())+1
    //let imgdex=1
    util.daoJiShi(this,6);
    this.setData({
    srcimgpath:`/images/物品/${imgdex}.jpeg`,
    })

     setTimeout(() => {
       this.setData({
    srcimgpath:`/images/liwuhe.jpeg`
    })
     }, 1000);
   },


  onLoad() {
    this.setData({
      motto: 'hello world'
    })
  }
})
