import config from './config'
export default (url, data={}, method='GET') =>{
       return new Promise((resolve,reject)=>{
         wx.request({
           url: config.host+url,
           data:data,
           method,
           header: {
            "authorization": wx.getStorageSync('TOKEN')
          },
           success:(res)=>{       
                resolve(res.data)
           },
           fail:(err)=>{
              reject(err)
           }
         })
       }) 

       
}