// 百科小仓库
import { getAllBaike} from '@/api/baike';

let state = {
    AllBaikeList: []
};
let mutations = {
    GETALLBAIKE(state,data){
        state.AllBaikeList=data
    }
};
let actions = {
    // 获取所有辅食信息
    async getAllBaike({ commit, state, dispatch }) {
        console.log(123);
        let result = await getAllBaike();
        if (result.status == 0) {
            commit('GETALLBAIKE', result.data);
        }
    },
};
let getters = {};

//对外暴露
export default {
    state,
    mutations,
    actions,
    getters
}