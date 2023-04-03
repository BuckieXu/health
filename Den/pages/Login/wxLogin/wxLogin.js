const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: {},
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this;
    _this.setData({
      options
    });
    if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      }
  },

  /**
   * 授权登录
   */
  getUserInfo(e){
    wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
            console.log(res);
            // 将用户信息本地存储
            wx.setStorageSync('userInfo', res.userInfo)
          this.setData({
            hasUserInfo: true
          })
        wx.redirectTo({
          url: '/pages/Login/Login',
        })
        }
      })
  },
  /**
   * 暂不登录
   */
  onNotLogin() {
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 授权成功 跳转回原页面
   */
  onNavigateBack(delta) {
    wx.navigateBack({
      delta: Number(delta || 1)
    });
  },

})