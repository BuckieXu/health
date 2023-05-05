import request from "@/utils/request"

export const getAllBaike=() => request({url:"/api/ChildKnowledge/getAllKnowledge",method:'POST'})
