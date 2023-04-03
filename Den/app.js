// app.js
import request from './utils/request';
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if (wx.getStorageSync('TOKEN')) {
        wx.switchTab({
          url: '/pages/index/index',
        })
      }else{
        wx.navigateTo({
          url: '/pages/Login/wxLogin/wxLogin',
        })
      }
    // 登录
    wx.login({
      success: res => {
        wx.request({
          url: 'http://127.0.0.1:3001/check/getUserInfo',
          header:{
            "authorization":wx.getStorageSync('TOKEN')
          },
          success:(res)=>{
             this.globalData.userInfo=res.data.data
        }
        })
      }
    })
  },
  globalData: {
    userInfo:{},
    isMusicPlay:false, // 是否有音乐在播放
    musicId: '' // 音乐id
  },
})
