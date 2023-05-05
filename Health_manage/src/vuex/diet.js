// 辅食小仓库
import { getAllDiet, addDiet, getDietByClass, deleteDiet, changeDiet } from '@/api/diet';
import {  Message } from 'element-ui'
let state = {
    AllDietList: []
};
let mutations = {
    GETALLDIET(state, data) {
        state.AllDietList = data
    },
    GETDIETBYVALUE(state, data) {
        state.AllDietList = data
    }
};
let actions = {
    // 获取所有辅食信息
    async getAllDiet({ commit, state, dispatch }) {
        let result = await getAllDiet();
        console.log(result);
        if (result.status == 0) {
            commit('GETALLDIET', result.data);
        }
    },
    //  添加辅食
    async addDiet({ commit }, data) {
        let result = await addDiet(data);
        if (result.status == 0) {
            Message({
                message:'添加成功',
                type: 'success'
              })
        } else {
            Message({
                message:'添加失败',
                type: 'error'
              })
        }

    },
    // 通过字段返回相应的辅食数据，比如foodclass
    async getDietByValue({ commit }, data) {
        let result = await getDietByClass(data);
        if (result.status == 0) {
            commit('GETDIETBYVALUE', result.data);
        }
    },
    async deleteDiet({ commit },id) {
        await deleteDiet(id)
    },
    async changeDietFn({ commit },data) {
        let dietId=data.dietId
        delete data.dietId
        let result = await changeDiet(dietId,data)
        if (result.status == 0) {
            Message({
                message:'修改成功',
                type: 'success'
              })
        }else {
            Message({
                message:'修改失败',
                type: 'error'
              })
        }
    }
};
let getters = {};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}