// pages/Vaccine/VaccinePlan/VaccinePlan.js
import request from '../../../utils/request';
import moment from '/moment';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 2,
        steps: [],
        show: false,
        vaccinelist: [],
        result: [],
        row:[]
    },
    onChange(event) {
        // console.log(event);
        this.setData({
            result: event.detail,
        });
    },

    toggle(event) {
        const {
            index
        } = event.currentTarget.dataset;
        // console.log(index);
        const checkbox = this.selectComponent(`.checkboxes-${index}`);
        checkbox.toggle();
    },

    noop() {},
    //    获取宝宝的接种疫苗情况信息
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.addFreeVaccine()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    //为宝宝添加免疫规划疫苗
    async addFreeVaccine() {
        let babyid = wx.getStorageSync('selectbabyid');
        const result=await request(`/api/Vaccine/addFreeVaccine/${babyid}`,{},'POST');
            this.setData({
                vaccinelist: result.data
            })
            let vaccinelist=this.data.vaccinelist;
            for (let i = 0; i <vaccinelist.length; i++) {
                for (let y = i; y > 0; y--) {
                    if (vaccinelist[y].ageGroup < vaccinelist[y - 1].ageGroup) {
                        [vaccinelist[y - 1], vaccinelist[y]] = [vaccinelist[y], vaccinelist[y - 1]]
                    }
                }
            }
            vaccinelist.forEach(item => {
                var steps = this.data.steps
                let obj = {}
                obj.text = item.vaccineName + "\r\n" + (item.vaccineGroup == "免疫规划疫苗" ? "免费" : "自费")
                obj.desc = "接种时间:" + (item.ageGroup > 12 ? item.ageGroup / 12 + "岁" : item.ageGroup + "月龄") + `\r\n` + item.include,
                    obj.activeIcon = 'success',
                    steps.push(obj)
                this.setData({
                    steps
                })
            })
    },
    // 获取所有疫苗的基本数据
    async getNoFreeVaccine() {
        const babyid=0;
       const result=await request(`/api/Vaccine/getAllVaccineById/${babyid}`);
       if(result.status==0){
        this.setData({
            vaccineList: result.data,
        })
        var row = this.data.row
        this.data.vaccineList.forEach(Item => {
            if (Item.vaccineGroup == "非免疫规划疫苗") {
                const arr = {};
                    arr.vaccineGroup="非免疫规划疫苗"
                    arr.ageGroup = Item.ageGroup,
                    arr.vaccineName = Item.vaccineName,
                    arr.num=Item.num,
                    arr.sum=Item.sum,
                    arr.status="未接种",
                    arr.include=Item.include,
                    arr.inoculateDate=moment().format('YYYY-MM-DDTHH:mm'); 
                    arr.babyid=wx.getStorageSync('selectbabyid')
                    row.push(arr)
                for (let i = 0; i < row.length; i++) {
                    for (let y = i; y > 0; y--) {
                        if (row[y].ageGroup < row[y - 1].ageGroup) {
                            [row[y - 1], row[y]] = [row[y], row[y - 1]]
                        }
                    }
                }
                this.setData({
                    row
                })

            }

        });
       }
    },
    // 添加非免疫规划疫苗
    async addNoFreeVaccine(){
        for( let value of this.data.result){
            var that =this
            const data={...that.data.row[value]}
            const res=await request('/api/Vaccine/addVaccine',data,'POST');
            if(res.status==0){
                that.getAllVaccineById()
                that.onClose()
            }
        }
    },
    // 获取宝宝所有的疫苗
    async getAllVaccineById(){
        let babyid = wx.getStorageSync('selectbabyid')
        const result=await request(`/api/Vaccine/getAllVaccineById/${babyid}`);
        if(result.status==0){
            this.setData({
                vaccinelist: result.data
            })
            let vaccinelist=this.data.vaccinelist;
            for (let i = 0; i <vaccinelist.length; i++) {
                for (let y = i; y > 0; y--) {
                    if (vaccinelist[y].ageGroup < vaccinelist[y - 1].ageGroup) {
                        [vaccinelist[y - 1], vaccinelist[y]] = [vaccinelist[y], vaccinelist[y - 1]]
                    }
                }
            }
            vaccinelist.forEach(item => {
                var steps = this.data.steps
                let obj = {}
                obj.text = item.vaccineName + "\r\n" + (item.vaccineGroup == "免疫规划疫苗" ? "免费" : "自费")
                obj.desc = "接种时间:" + (item.ageGroup > 12 ? item.ageGroup / 12 + "岁" : item.ageGroup + "月龄") + `\r\n` + item.include,
                    obj.activeIcon = 'success',
                    steps.push(obj);
                this.setData({
                    steps
                })
            })
        }
    },
    showPopup() {
        this.setData({
            show: true
        });
        this.getNoFreeVaccine()
    },
    onClose() {
        this.setData({
            show: false
        });
    },
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