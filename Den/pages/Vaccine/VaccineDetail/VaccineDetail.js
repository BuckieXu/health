// pages/Vaccine/VaccineDetail/VaccineDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        vaccineId:'',
        vaccineMsg:[],
        radio: '1',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
    //    console.log(options);
       this.setData({
           vaccineId:options.vaccineId
       })
       this.getVaccineDetailById()
    },
    // 获取疫苗信息详情
    getVaccineDetailById(){
        var Id=this.data.vaccineId;
        wx.request({
          url: `http://127.0.0.1:3000/api/Vaccine/getVaccineByVacId/${Id}`,
          method:'POST',
          success:res=>{
              this.setData({
                  vaccineMsg:res.data.data[0]
              })
            //   console.log(this.data.vaccineMsg);
          }
          
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