// pages/Diary/diary.js
import request from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // BabyDiaryList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getAllbabydiary()
    },
    toLogin(){
wx.redirectTo({
  url: '/pages/Login/wxLogin/wxLogin',
})
    },
    formatDate(date) { 
        var year=date.getFullYear(); 
        var month=date.getMonth()+1; 
        var day=date.getDate(); 
        return year+"-"+month+"-"+day; 
    },
    // 获取宝宝id的所有日记信息
    async getAllbabydiary() {
        const babyid = wx.getStorageSync('selectbabyid')
const result=await request(`/api/getBabyDiaryById/${babyid}`)
if(result.status==0){
    this.setData({
        BabyDiaryList: result.data
    })
}
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