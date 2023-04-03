// pages/Login/Login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
            username:'',
            password:''
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    Login(){
        wx.request({
          url: 'http://127.0.0.1:3001/api/login',
          method:'POST',
          data:{
              username:this.data.username,
              password:this.data.password
          },
          success:(res)=>{
              wx.setStorage({
                key:"TOKEN", 
                data:res.data.token         
              })
              wx.switchTab({
                url: '/pages/index/index',
              })
          }
        })
    },
    wxLogin(){
        wx.reLaunch({
          url: '/pages/Login/wxLogin/wxLogin',
        })
    },
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})