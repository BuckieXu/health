import axios from 'axios';
import { loginreq, req } from './axiosFun';
import request from "@/utils/request"


// 登录接口 
export const login=(data) => request({url:'/api/login',method:'POST',data})



// 获取用户菜单
export const menu = (params) => { return axios.get("/api/menu?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };
// 退出接口
export const loginout = () => { return axios.delete("/api/login?&token=" + localStorage.getItem('logintoken')).then(res => res.data) };

// 获取所有的用户账号信息
export const getAllUser=() => request({url:'/api/getAllUser',method:'POST'})
// 通过ID获取用户信息
export const getUserById=(userId) => request({url:`/api/getUserById/${userId}`,method:'POST'})
// 注册用户
export const register=(userinfo) =>
axios({url:'http://127.0.0.1:3001/api/reguser',data:userinfo,method:'POST', timeout: 1000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}})

//修改用户信息
export const editUser=(userId,userinfo) =>
axios({url:`http://127.0.0.1:3001/api/editUser/${userId}`,data:userinfo,params:userId,method:'POST', timeout: 1000,headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}})

// 删除用户信息
export const deleteUserById=(userId) => request({url:`/api/deleteUserById/${userId}`,method:'POST'})

// 获取所有角色信息
export const getAllRole=() => request({url:'/api/getAllRole',method:'POST'})
//添加角色信息
export const addRole=(data) => request({url:'/api/addrole',method:'POST',data})
// 删除角色
export const deleteRole=(roleid) => request({url:`/api/deleteRole/${roleid}`,method:'POST'})



