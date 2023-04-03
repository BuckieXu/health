// pages/Add/AddDiary/DiaryDescribe/DiaryDescribe.js
import request from '../../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        eventName: '',
        TimeID: -1,
        describe: '',
        fileList: [],
        height: 60,
        weight: 15
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.onTapNavigationBarRightButton({
            hide: true
        });
        this.setData({
            eventName: options.eventName
        })
    },
    // 步进器
    onChange(value) {
        console.log(value);
    },
    // 上传图片
    afterRead(event) {
        const {
            file
        } = event.detail;
        console.log(file);
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
            filePath: file.url,
            name: 'file',
            formData: {
                user: 'test'
            },
            success(res) {
                // 上传完成需要更新 fileList
                const {
                    fileList = []
                } = this.data;
                fileList.push({
                    ...file,
                    url: res.data
                });
                this.setData({
                    fileList
                });
            },
        });
    },
    //获取文本域中值
    getTextareaValue(e) {
        const {
            value
        } = e.detail;
        if (!value.trim()) {
            return;
        }
        clearTimeout(this.data.TimeID);
        this.data.TimeID = setTimeout(() => {
            //4.准备发送请求获取数据
            this.setData({
                describe: value
            })
        }, 500);
    },
    //点击加号
    addvalue(e) {
        if (e.currentTarget.dataset.tag == "height") {
            this.setData({
                height: this.data.height + 1
            })
        } else {
            this.setData({
                weight: this.data.weight + 1
            })
        }
    },
    // 点击减号
    minusvalue(e) {
        if (e.currentTarget.dataset.tag == "height") {
            this.setData({
                height: this.data.height - 1
            })
        } else {
            this.setData({
                weight: this.data.weight - 1
            })
        }
    },
    // 上传日记
    async publishDiary() {
        const {
            eventName,
            describe,
            height,
            weight
        } = this.data
        const babyid = wx.getStorageSync('selectbabyid')
        const result = await request(`/api/addDiary/${babyid}`, {
            eventName,
            describe,
            diary_url: "https://ts1.cn.mm.bing.net/th/id/R-C.8e5e293cae342149832fff96bb4c8caa?rik=dbonSUJuDVqx5A&riu=http%3a%2f%2fimg.mm4000.com%2ffile%2f8%2fd7%2f6527dce099.jpg%3fdown&ehk=E9%2bVucd%2fent1hsPcwHCre695jRwtoRQJzu1ymZuXJL0%3d&risl=&pid=ImgRaw&r=0",
            height,
            weight
        }, 'POST')
        if (result.status == 0) {
            wx.showToast({
                title: '添加成功',
                icon: 'success',
                duration: 2000
            })
            wx.redirectTo({
                url: '/pages/Diary/diary',
            })
        }
    },
    // 返回选择事件页面
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