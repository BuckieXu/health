// pages/exercise/exercise.js
import request from '../../utils/request'
Page({
    data:{
        option1: [
          { text: '全部运动', value: 0 },
          { text: '精细运动训练', value: 1 },
          { text: '粗大运动训练', value: 2 },
        ],
        option2: [
            { text: '月龄', value: 0 },
            { text: '1-3月龄', value: 1 },
            { text: '3-6月龄', value: 2 },
            { text: '6-12月龄', value: 3 },
            { text: '12-24月龄', value: 4 }
          ],
        value1:0,
        value2:0,
        exerciseClass:"全部运动",
        min: 0,
        max: 24,
        exerciselist: [],
        // 控制没有数据页面算法显示
        isshow:false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getExercise()
    },
    changevalue1(e){
        this.setData({
            value1:e.detail,
            exerciseClass:this.data.option1[e.detail].text
        })
        this.getExercise()
    },
    changevalue2(e){
        console.log(e);
        if(e.detail==0){
            this.setData({
                value2:e.detail,
                min:0,
                max:32
            })
        }else{
            console.log(typeof(Number(this.data.option2[e.detail].text.split('月')[0].split('-')[0])));
            this.setData({
                value2:e.detail,
                min:Number(this.data.option2[e.detail].text.split('月')[0].split('-')[0]),
                max:Number(this.data.option2[e.detail].text.split('月')[0].split('-')[1])
            })
        }
        
        this.getExercise()
    },
    // 获取运动信息
    async getExercise() {
        const {
            exerciseClass,
            min,
            max
        } = this.data
        const result = await request('/api/exercise/getexercise', {
            exerciseClass: exerciseClass,
            min: min,
            max: max
        }, 'POST')
        console.log(result);
        if (result.status == 0) {
            this.setData({
                isshow:false,
                exerciselist: result.data
            })
        }
        if(result.status==1&&result.message=="没有数据！"){
            this.setData({
                isshow:true
            })
        }
    },
    goDetail(e){
        const id=e.currentTarget.dataset.id
        wx.navigateTo({
            url: './detail/detail?id='+id
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