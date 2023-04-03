// 宝宝信息路由
const express = require('express')
// 创建路由对象
const router = express.Router()
// 引入宝宝信息处理函数
const BabyMsgRouter=require("../router_handler/BabyMsg")

// 添加宝宝信息
router.post('/addBabyMsg',BabyMsgRouter.addBabyMsg)
// 修改宝宝信息
router.post('/updateBabyMsg',BabyMsgRouter.updateBabyMsg)
// 查询宝宝信息
router.get('/getBabyMsg/:id',BabyMsgRouter.getBabyMsg)
// 通过用户id查询下面宝宝信息



module.exports = router