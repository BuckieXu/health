// pages/index/index.js
import request from '../../utils/request';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLogin: '',
        randomArr: [],
        childknowledge: [],
        knowledge: []

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            isLogin: wx.getStorageSync('TOKEN')
            // isLogin:''
        })
        this.getbaike()
        this.abs()
        this.getPlaylist()
    },
    goDiet(){
        wx.switchTab({
            url: '/pages/ComplementFood/Complement',
        })
    },
    goStory(){
        wx.navigateTo({
          url: '/pages/story/story',
        })
    },
    goFeedGuide(){
        wx.navigateTo({
            url: '/pages/FeedGuide/FeedGuide',
          })
    },
    goExercise(){
        wx.navigateTo({
          url: '/pages/exercise/exercise',
        })
    },
    gobaike() {
        wx.navigateTo({
            url: '/pages/baike/baike',
        })
    },
    gobaikeDetail(e){
       const ChildKnowledgeId=e.currentTarget.dataset.id;
       wx.navigateTo({
         url: '/pages/baike/detail/detail?id='+ChildKnowledgeId
       })
    },
    // 获取三项育儿百科
    async getbaike() {
        const ageGroup = '12'
    const  result=await request(`/api/ChildKnowledge/getAllKnowledge/${ageGroup}`)
    if(result.status==0){
        this.setData({
            childknowledge: result.data[0].knowledgeList
        })
        const knowledge = []
                for (let index = 0; index < 3; index++) {
                    knowledge.push(this.data.childknowledge[this.data.randomArr[index]])
                    this.setData({
                        knowledge
                    })

                }
    }
    },
    goDiary(){
        wx.navigateTo({
            url: '/pages/Diary/diary',
        })
    },
    goVaccine(){
        wx.switchTab({
            url: '/pages/Vaccine/Vaccine',
        })
    },
    goMy(){
        wx.switchTab({
          url: '/pages/My/My',
        })
    },
    // 获取四项育儿故事
      // 通过导航的值获取歌曲分类详细列表
   getPlaylist(){
    wx.request({
      url: 'http://localhost:3000/search?keywords='+"睡前故事"+'&&type='+'1000'+'&&limit='+'4',
      success:(res)=>{
          this.setData({
           playlists:res.data.result.playlists
          })
      }
    })
 },
 // 去歌曲详情页
 goPlaylist(event){
   let id=event.currentTarget.dataset.id;
   wx.navigateTo({
     url: '/pages/story/playlist/playlist?id='+id,
   })
 },
    // 生成随机数
    abs() {
        var randomArr = new Array();
        for (var i = 0; i < 3; i++) {
            //var n = Math.random() * 20 + 0;
            //n = Math.round(n);//四舍五入取整
            var n = parseInt(Math.random() * 20 + 0); //随机生成整形数
            if (randomArr.length == 0) {
                randomArr.push(n); //从末尾插入数组
            } else {
                //indexOf判断数组中是否有元素n,如果没有输出-1，如果有输出位置
                if (randomArr.indexOf(n) < 0) {
                    randomArr.push(n);
                } else {
                    i--;
                }

            }
        }
        this.setData({
            randomArr
        })
    },
    //转化时间格式

    time(date) {
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        return y + '-' + m + '-' + d
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