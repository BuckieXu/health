// f辅食路由
const express=require('express')
const router = express.Router()
const ExercisetHandler = require('../router_handler/Exercise')

//添加宝宝运动
router.post('/addexercise',ExercisetHandler.addexercise) 
// 获取运动列表
router.post('/getexercise',ExercisetHandler.getexercise)
// 通过运动id获取信息
router.post('/getexerciseById/:exerciseid',ExercisetHandler.getexerciseById)


module.exports = router