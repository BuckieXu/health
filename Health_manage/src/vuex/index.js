import Vue from 'vue';
import Vuex from 'vuex';
import {login} from '@/api/userMG'

Vue.use(Vuex);
import diet from './diet'
import vaccine from './vaccine'
import baike from './baike'
import USER from './user'

// 登录验证
export default new Vuex.Store({
    state: {
        user: false
    },
    mutations: {
        // // 登录
        // login(state, user) {
        //     state.user = user;
        //     localStorage.setItem("userInfo", user);
        // },
        // // 退出
        // logout(state, user) {
        //     state.user = "";
        //     localStorage.setItem("userInfo", "");
        // }
    },
    actions:{

    },
    modules:{
        diet,
        vaccine,      
        baike,
        USER
    }
})