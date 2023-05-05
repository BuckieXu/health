import request from "@/utils/request"

export const getAllBaby=() => request({url:"/api/getAllBaby",method:'POST'})
export const getBabyById=(id) => request({url:`/api/getBabyMsg/${id}`,method:'GET'})

