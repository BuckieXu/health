// pages/baike/baike.js
import request from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: ['0-1岁', '1-3岁', '3-6岁'],
        current: 0,
        ageGroup: ['12', '24', '36'],
        mainActiveIndex: 0,
        activeId: null,
        abc: [
        ]

    },
    // 获取育儿百科列表
    async getChildKnowledge() {
        var ageGroup = 12;
        let abc = [];
        var result=await request(`/api/ChildKnowledge/getAllKnowledge/${ageGroup}`);
        if(result.status==0){
            let results = result.data;
            results.map(item => {
                    var obj={}
                    // console.log(item);
                    obj.text=item.mainClass;
                    // console.log(obj);
                    abc.push(obj)
                });
                this.setData({
                    childknowledge: result.data,
                    abc: abc
                })
        }
    },
    async tabSelect(e) {
        var current = e.currentTarget.dataset.id
        this.setData({
            current: current
        })
        var ageGroup = this.data.ageGroup[current];
        let abc = [];
        const result=await request(`/api/ChildKnowledge/getAllKnowledge/${ageGroup}`);
        if(result.status==0){
            let results = result.data;
            results.map(item => {
                    var obj={}
                    // console.log(item);
                    obj.text=item.mainClass;
                    // console.log(obj);
                    abc.push(obj)
                });
                this.setData({
                    childknowledge: result.data,
                    abc: abc
                })
        }

    },
    onClickNav({
        detail = {}
    }) {
        this.setData({
            mainActiveIndex: detail.index || 0,
        });
    },

    onClickItem({
        detail = {}
    }) {
        const activeId = this.data.activeId === detail.id ? null : detail.id;

        this.setData({
            activeId
        });
    },
    goDetail(e){
        const id=e.currentTarget.dataset.id
        wx.navigateTo({
          url: './detail/detail?id='+id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getChildKnowledge()
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