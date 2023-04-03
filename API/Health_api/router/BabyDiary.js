// 日记路由
const express = require('express')
// 创建路由对象
const router = express.Router()
// 引入宝宝日记处理函数
const BabyDiaryHandler=require("../router_handler/BabyDiary")

// 添加日记
router.post('/addDiary/:babyid',BabyDiaryHandler.addDiary)
// 修改宝宝日记
router.post('/updateDiary/:diaryid',BabyDiaryHandler.updateDiary)
// // 查询宝宝日记
router.get('/getBabyDiaryById/:babyid',BabyDiaryHandler.getBabyDiaryById)
// 获取所有日记信息
router.get('/getAllDiary',BabyDiaryHandler.getAllDiary)

module.exports = router