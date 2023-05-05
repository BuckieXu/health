import request from "@/utils/request"

export const getAllExercise=() => request({url:"/api/exercise/getexercise",method:'POST',data:{exerciseClass:"全部运动",min:0,max:72}})
export const getBabyById=(id) => request({url:`/api/getBabyMsg/${id}`,method:'GET'})

