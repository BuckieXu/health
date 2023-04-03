// pages/Add/AddDiary/AddDiary.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        eventName: '',
        TimeID:-1,
        eventList:['做火车','穿衣服','去公园','证件照','叫妈妈','发烧','做家务','剃光头','刷牙',
    '动物园','早教','走','爬','用勺子','逛超市','坐船','画画','叫爸爸','说词语','感冒','看书','游泳','洗澡']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    getInputValue(e) {
        const {value}=e.detail;
        if(!value.trim()){
            return;
        }
        clearTimeout(this.data.TimeID);
        this.data.TimeID = setTimeout(() => {
            //4.准备发送请求获取数据
            this.setData({
                eventName:value
            })
        }, 500);
    },
    changeTag(e){
        this.setData({
            eventName:e.currentTarget.dataset.eventname
        })
    },
    GolastOne() {
        wx.navigateTo({
            url: '/pages/Add/AddDiary/DiaryDescribe/DiaryDescribe?eventName=' + this.data.eventName,
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