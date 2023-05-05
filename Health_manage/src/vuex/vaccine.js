// 辅食小仓库
import { getAllBabyVaccine,getVaccineById,getBabyMsgById,addVaccine,changeVaccine } from '@/api/vaccine';
import {  Message } from 'element-ui'
let state = {
    AllVaccineList:[],
    babymsg:{}
};
let mutations = {
    ALLVACCINE(state,data){
        state.AllVaccineList=data
    },
    GETVACCINEBYID(state,data){
        state.AllVaccineList=data
    },
    GETBABYMSGBYID(state,data){
        state.babymsg=data
    }
};
let actions = {
    // 获取所有疫苗
    async AllVaccine({commit}){
        let result =await getAllBabyVaccine()
        if(result.status==0||result.data){
            commit('ALLVACCINE',result.data)
        }
    },
    // 通过宝宝ID获取疫苗
    async getVaccineByid({commit},babyid){
        let result =await getVaccineById(babyid)
        if(result.status==0||result.data){
        commit('GETVACCINEBYID',result.data)
        }
    },
    //获取宝宝基本信息
    async getBabyMsgById({commit},id){
        let result=await getBabyMsgById(id)
        if(result.status==0){
            commit('GETBABYMSGBYID',result.data)
        }
    },
    // 添加基本疫苗
    async addFreeVaccine({commit},babyid){
        let result=await addVaccine(babyid)      
        if(result.status==0&&result.data.affectedRows==20){
            Message({
                message: '添加成功',
                type: 'success'
              })
        }else{
            Message({
                message: '不可重复添加',
                type: 'warning'
              })
        }
    },
    // 修改疫苗信息
    async changeVaccineAc({commit},data){
        let {vaccineId,status,inoculateDate}=data
        let obj={
            status,
            inoculateDate
        }     
         let result=await changeVaccine(vaccineId,obj)
         if(result.status==0&&result.data.affectedRows==1){
            Message({
                message: '修改成功',
                type: 'success'
              })
         }else{
            Message({
                message: '修改失败',
                type: 'warning'
              })
         }
    }

};
let getters = {

};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}