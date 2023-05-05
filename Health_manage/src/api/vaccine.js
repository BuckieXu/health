import request from "@/utils/request"

// 获取所有疫苗
export const getAllBabyVaccine=() => request({url:"/api/Vaccine/getAllVaccine",method:'POST'})
//通过宝宝ID获取疫苗
export const getVaccineById=(babyid) =>request({url:`/api/Vaccine/getAllVaccineById/${babyid}`,method:'GET'})

// 获取宝宝信息
export const getBabyMsgById=(id) =>request({url:`/api/getBabyMsg/${id}`,method:'GET'})

//添加基本疫苗
export const addVaccine=(babyid) =>request({url:`/api/Vaccine/addFreeVaccine/${babyid}`,method:'POST'})

// 修改疫苗信息
export const changeVaccine=(vaccineId,data) =>request({url:`/api/Vaccine/updataVaccine/${vaccineId}`,method:'POST',data})

