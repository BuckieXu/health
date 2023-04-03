const express = require('express')
// 创建路由对象
const router = express.Router()
// 引入路由处理模块

const checkHandler = require('../router_handler/tokencheck')

// 获取用户基本信息的路由
router.get('/getUserInfo',checkHandler.getUserInfo)
// 通过用户id查询下面的宝宝信息
router.get('/getBabyMsgByuserId',checkHandler.getBabyMsgByuserId)





module.exports = router
