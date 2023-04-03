// pages/ArticleList/articlelist.js
import request from '../../utils/request';
Page({
    /**
     * 页面的初始数据
     */
    data: {
        foodclass: '',
        ageGroup: '',
        DietList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options);
        if (options.foodclass) {
            this.setData({
                foodclass: options.foodclass
            })
            wx.setNavigationBarTitle({
                title: this.data.foodclass
            })
            this.getFoodsListByClass()
        } else if (options.ageGroup) {
            this.setData({
                ageGroup: options.ageGroup
            })
            var age = this.data.ageGroup
            if (age >= 12) {
                // age=Math.floor(age/12)+"岁"
                if (age % 12 != 0) {
                    age = Math.floor(age / 12) + "岁半"
                } else {
                    age = age / 12 + "岁"

                }
            } else {
                age = age + "月龄"
            }
            wx.setNavigationBarTitle({
                title: age
            })
            this.getFoodListByAge()
        } else if (options.efficacy) {
            this.setData({
                efficacy: options.efficacy
            })
            wx.setNavigationBarTitle({
                title: this.data.efficacy
            })
            this.getFoodsListByefficacy()
        }
    },
    //   通过辅食食材获取辅食数据
    async getFoodsListByClass() {
        const value = this.data.foodclass
        const result = await request('/api/Diet/getDietByClass', {
            class: 'foodclass',
            value
        }, 'POST')
        if (result.status == 0) {
            this.setData({
                DietList: result.data
            })
        }

    },
    // 通过功效获取食材数据
    async getFoodsListByefficacy() {
        const value = this.data.efficacy
        const result = await request('/api/Diet/getDietByClass', {
            class: 'efficacy',
            value
        }, 'POST')
        if (result.status == 0) {
            this.setData({
                DietList: result.data
            })
        }
    },
    // 通过月龄获取辅食数据
    async getFoodListByAge() {
        const value = this.data.ageGroup
        const result = await request('/api/Diet/getDietByClass', {
            class: 'ageGroup',
            value
        }, 'POST')
        if (result.status == 0) {
            this.setData({
                DietList: result.data
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