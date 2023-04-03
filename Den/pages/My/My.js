// pages/My/My.js
import request from '../../utils/request';
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        babyMsg: [],
        num: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            userInfo: wx.getStorageSync('userInfo')
        })
        this.getBabyMsgByuserId()
    },
    // 获取用户下面宝宝信息
    async getBabyMsgByuserId() {
        const result = await request('/check/getBabyMsgByuserId')
        if (result.status == 0) {
            this.setData({
                babyMsg: result.data
            })
            let babyid = this.data.babyMsg[this.data.num].babyid
            wx.setStorageSync('selectbabyid', babyid)
        }
    },
    // 添加宝宝
    addbaby() {
        let number = babymsg.length
        if (number > 3) {
            wx.showToast({
                title: '最多添加三个',
                icon: 'fail',
                duration: 2000
            })
        } else {
            console.log('添加');
        }

    },
    // 切换选中状态
    changeSelect(e) {
        this.setData({
            num: e.currentTarget.dataset.num
        })
        let value = this.data.babyMsg[this.data.num].babyid
        wx.setStorageSync('selectbabyid', value)
    },
    // 编辑用户个人信息
    changeMsg() {
        wx.navigateTo({
            url: '/pages/My/ChangeMsg/ChangeMsg'
        })
    },
    toLogin(){
        wx.redirectTo({
          url: '/pages/Login/wxLogin/wxLogin',
        })
    },
    // 点击退出登录
    exit: function () {
        wx.clearStorageSync(); //清除缓存
        wx.showToast({
            title: '退出登录成功',
            icon: 'none',
            duration: 2000,
            success: function () {
                setTimeout(function () {
                    //跳转到首页，强制重启
                    wx.reLaunch({
                        url: '/pages/Login/wxLogin/wxLogin',
                    })
                }, 2000);
            }
        })
    },
    // 前往日记页
    goDiary() {
        wx.navigateTo({
            url: '/pages/Diary/diary',
        })
    },
    // 前往育儿百科

    gobaike() {
        wx.navigateTo({
            url: '/pages/baike/baike',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
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