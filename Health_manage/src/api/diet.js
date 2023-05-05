import request from "@/utils/request"

// 获取所有的辅食信息
export const getAllDiet=() => request({url:"/api/Diet/getAllDiet",method:'GET'})
// 添加辅食
export const addDiet = (data) => request({url:"/api/Diet/addDiet",method:'POST',data})
// 通过传字段获取辅食数据
export const getDietByClass = (data) =>  request({url:"/api/Diet/getDietByClass",method:'POST',data})
// 删除辅食
export const  deleteDiet=(dietId) => request({url:`/api/Diet/deleteDiet/${dietId}`,method:'POST'})
// 修改辅食信息
export const  changeDiet=(dietId,data) => request({url:`/api/Diet/updateDiet/${dietId}`,method:'POST',data})