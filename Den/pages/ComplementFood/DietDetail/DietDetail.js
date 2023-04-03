// pages/ComplementFood/DietDetail/DietDetail.js
import request from '../../../utils/request';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        dietId: '',
        dietDataList: {},
        tags: [],
        foodMaterial:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options.dietId);
        this.setData({
            dietId: options.dietId
        })
        this.getDietDataById()


    },
    // 根据dietId获取辅食详细数据
    async getDietDataById() {
        const ID = this.data.dietId
        const result=await request(`/api/Diet/getDietById/${ID}`)
        if(result.status==0){
            this.setData({
                dietDataList: result.data[0],
                tags: result.data[0].efficacy.split("、"),
                foodMaterial: result.data[0].foodMaterial.split("，")
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