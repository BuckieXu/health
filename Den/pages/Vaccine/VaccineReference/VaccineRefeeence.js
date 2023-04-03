// pages/Vaccine/Vaccine.js
import request from '../../../utils/request'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tableHeader: [{
                prop: 'mouth',
                width: 150,
                label: '月龄',
                color: '#55C355'
            },
            {
                prop: 'VccineName',
                width: 450,
                label: '疫苗名称'
            },
            {
                prop: 'count',
                width: 152,
                label: '剂次'
            }
        ],
        stripe: true,
        border: true,
        outBorder: true,
        row: [],
        msg: '暂无数据',
        isShow: true,
        vaccineList: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getALLVaccine()

    },
    changeShow(e) {
        let num = e.currentTarget.dataset.show
        if (num == 1) {
            this.setData({
                isShow: true,
                row: []
            })
            var row = this.data.row
            this.data.vaccineList.forEach(Item => {
                if (Item.vaccineGroup == "免疫规划疫苗") {
                    const arr = {};
                    arr.vaccineId = Item.vaccineId,
                        arr.mouth = Item.ageGroup,
                        arr.VccineName = Item.vaccineName,
                        arr.count = Item.num,
                        row.push(arr)
                    for (let i = 0; i < row.length; i++) {
                        for (let y = i; y > 0; y--) {
                            if (row[y].mouth < row[y - 1].mouth) {
                                [row[y - 1], row[y]] = [row[y], row[y - 1]]
                            }
                        }
                    }
                    this.setData({
                        row
                    })

                }

            });
        } else if (num == 0) {
            this.setData({
                isShow: false,
                row: []
            })
            var row = this.data.row
            this.data.vaccineList.forEach(Item => {
                if (Item.vaccineGroup == "非免疫规划疫苗") {
                    const arr = {};
                    arr.vaccineId = Item.vaccineId,
                        arr.mouth = Item.ageGroup,
                        arr.VccineName = Item.vaccineName,
                        arr.count = Item.num,
                        row.push(arr)
                    for (let i = 0; i < row.length; i++) {
                        for (let y = i; y > 0; y--) {
                            if (row[y].mouth < row[y - 1].mouth) {
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
    // 获取所有疫苗数据
    async getALLVaccine() {
        const babyid=0;
        const result =await request(`/api/Vaccine/getAllVaccineById/${babyid}`);
        if(result.status==0){
                            // console.log(result);
                            this.setData({
                                vaccineList: result.data,
                            })
                            var row = this.data.row
                            this.data.vaccineList.forEach(Item => {
                                if (Item.vaccineGroup == "免疫规划疫苗") {
                                    const arr = {};
                                    arr.vaccineId = Item.vaccineId,
                                        arr.mouth = Item.ageGroup,
                                        arr.VccineName = Item.vaccineName,
                                        arr.count = Item.num,
                                        row.push(arr)
                                    for (let i = 0; i < row.length; i++) {
                                        for (let y = i; y > 0; y--) {
                                            if (row[y].mouth < row[y - 1].mouth) {
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