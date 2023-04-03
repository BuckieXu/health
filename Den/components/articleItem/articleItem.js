// components/articleItem/articleItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        Diet: Object,
        default: null
    },

    /**
     * 组件的初始数据
     */
    data: {
        Tag: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        goDietDetail() {
            const dietId=this.properties.Diet.dietId
            wx.navigateTo({
                url: '/pages/ComplementFood/DietDetail/DietDetail?dietId='+dietId,
            })
        }
    },
    attached() {
        var arr = this.properties.Diet.efficacy.split("、")
        // console.log(arr);
        this.setData({
            Tag:arr
        })

    }

})