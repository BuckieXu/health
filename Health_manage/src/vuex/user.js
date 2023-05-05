// 辅食小仓库
import { getAllUser, login, getUserById, register, editUser, deleteUserById, getAllRole, addRole, deleteRole } from '@/api/userMG';
import { Message } from 'element-ui';
import qs from 'qs'
let state = {
    userList: [],
    roleList: [],
    menu:[]

};
let mutations = {
    GETALLUSERMSG(state, data) {
        state.userList = data
    },
    GETUSERBYID(state, data) {
        state.userList = data
    },
    GETALLROLE(state, data) {
        state.roleList = data
    },
    SETROUTES(state,data){
        state.menu=data
    }
};
let actions = {
    async getAllUserMsg({ commit }) {
        let result = await getAllUser()
        if (result.status == 0 || result.data) {
            commit('GETALLUSERMSG', result.data)
        }
    },
    async login({ commit }, data) {
        let obj = {
            username: data.username,
            password: data.password
        }
        let result = await login(JSON.stringify(obj))
        if (result.data[0].roleid == 3) {
            Message({
                message: '普通用户不可登录管理系统',
                type: 'error'
            })
        } else {
            if (result.status == 0 && result.token) {
                commit('SETROUTES', result.data[1])
                // 本地存储
                sessionStorage.setItem('menu',JSON.stringify(result.data[1]))
                localStorage.setItem('TOKEN', result.token)
                localStorage.setItem('userinfo', JSON.stringify(result.data[0]))
                Message({
                    message: '登录成功',
                    type: 'success'
                })
            } else {
                Message({
                    message: '登录失败',
                    type: 'error'
                })
            }
        }
    },
    // 通过用户ID获取用户基本信息
    async getUserById({ commit }, userId) {
        let result = await getUserById(userId)
        if (result.status == 0 && result.data) {
            commit('GETUSERBYID', result.data)
        }
    },
    //注册的回调函数
    async register({ commit }, userInfo) {
        let obj = {
            userId: userInfo.userId,
            username: userInfo.username,
            nickname: userInfo.nacikname,
            role: userInfo.role,
            sex: userInfo.sex,
            createTime: userInfo.createTime,
            email: userInfo.email,
            phone: userInfo.phone,
            password: userInfo.password
        }
        console.log(obj);
        let result = await register(qs.stringify(userInfo))
        if (result.data.status == 0) {
            Message({
                message: '注册成功',
                type: 'success'
            })
        } else {
            Message({
                message: '注册失败',
                type: 'error'
            })
        }
    },
    //修改用户信息的回调
    async editUser({ commit }, userInfo) {
        console.log(userInfo);
        let userId = userInfo.userId
        let result = await editUser(userId, qs.stringify(userInfo))
        console.log(result);
        if (result.data.status == 0) {
            Message({
                message: '修改成功',
                type: 'success'
            })
        } else {
            Message({
                message: '修改失败',
                type: 'error'
            })
        }
    },
    async deleteUserById({ commit }, userId) {
        let result = await deleteUserById(userId)
        if (result.status == 0) {
            Message({
                message: '删除成功',
                type: 'success'
            })
        } else {
            Message({
                message: '删除失败',
                type: 'error'
            })
        }
    },
    // 获取所有角色信息
    async getallrole({ commit }) {
        let result = await getAllRole()
        if (result.status == 0 || result.data) {
            commit('GETALLROLE', result.data)
        }
    },
    // 添加角色
    async addrole({ commit }, data) {
        let result = await addRole(data)
        if (result.status == 0) {
            Message({
                message: '新增成功',
                type: 'success'
            })
        } else {
            Message({
                message: '添加失败',
                type: 'error'
            })
        }
    },
    // 删除角色
    async deleterole({ commit }, roleid) {
        let result = await deleteRole(roleid)
        if (result.status == 0) {
            Message({
                message: '删除成功',
                type: 'success'
            })
        } else {
            Message({
                message: '删除失败',
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