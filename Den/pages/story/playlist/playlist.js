import PubSub from 'pubsub-js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musiclist:[],
    id:'',
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 跳转此页面时需要传歌单id
     this.setData({
         id:options.id
     })
    //  获取歌单详情
    this.getPlayListInfo()
    PubSub.subscribe('GetType',(msg,type)=>{
        let {musiclist,index}=this.data
        if(type ==='pre'){
          (index==0)&&(index = musiclist.length)
          index -=1
        }else{ 
          (index==musiclist.length-1)&&(index=-1)
          index +=1
        }
        this.setData({
          index
        })
         let musicId=musiclist[index].id
         PubSub.publish('GetmusicId',musicId)
      })
  },
  // 获取歌单详情
   getPlayListInfo(){
       const {id}=this.data
    wx.request({
      url: 'http://localhost:3000/playlist/detail?id='+id,
      success:(res)=>{
        this.setData({
            musiclist:res.data.playlist.tracks
          })
      }
    })
  },
  bofang(event){
    let musicId = event.currentTarget.dataset.id;
    PubSub.publish('GetmusicId', musicId)
    wx.navigateTo({
      url: '/pages/story/songdetail/songdetail?musicId=' + musicId,
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