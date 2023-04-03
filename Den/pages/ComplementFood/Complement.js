// pages/ComplementFood/Complement.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categorylist: [],
        str: '',
        logo:[
            "/static/images/categorylist/Fe.jpg",
            "/static/images/categorylist/Zn.jpg",
            "/static/images/categorylist/gai.jpg",
            "/static/images/categorylist/Vc.png",
            "/static/images/categorylist/San.jpg",
            "/static/images/categorylist/danbaizhi-.png",
            "/static/images/categorylist/zhou.png",
            "/static/images/categorylist/生鲜-肉类3.png",
            "/static/images/categorylist/xia.png",
            "/static/images/categorylist/shuiguo.png",
            "/static/images/categorylist/jidan.png",
            "/static/images/categorylist/shucaiqu.png",
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        this.getCategoryList()

        //    console.log(this.data.categorylist);
    },
    async getCategoryList() {
        const that = this
        await wx.request({
            url: 'https://example.com/ajax?category',
            // dataType: 'json',
            success(res) {
                that.setData({
                    categorylist: res.data.categorylist
                })
                //   console.log(that.data.categorylist)
            }
        })
    },
    // 通过点击去列表
    toDietList(e) {
        if (e.currentTarget.dataset.agegroup) {
            const agegroup=e.currentTarget.dataset.agegroup
            wx.navigateTo({
                url: '/pages/ArticleList/articlelist?ageGroup=' + agegroup,
            })
        } else if (e.currentTarget.dataset.foodclass) {
            // console.log(e.currentTarget.dataset.foodclass);
            if (e.currentTarget.dataset.id=="l003") {
                const foodclass=e.currentTarget.dataset.foodclass;
                wx.navigateTo({
                    url: '/pages/ArticleList/articlelist?foodclass=' + foodclass,
                })
            }else if(e.currentTarget.dataset.id=="l002"){
                const efficacy=e.currentTarget.dataset.foodclass;
                wx.navigateTo({
                    url: '/pages/ArticleList/articlelist?efficacy=' + efficacy,
                })
            }
           
        }

    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        // console.log(this.data.categorylist);
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