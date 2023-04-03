// f辅食路由
const express=require('express')
const router = express.Router()
const DietHandler = require('../router_handler/Diet')

//添加食谱
router.post('/addDiet',DietHandler.addDiet)

// 修改辅食数据
router.post('/updateDiet/:dietId',DietHandler.updateDiet)

// 删除辅食数据
router.post('/deleteDiet/:dietId',DietHandler.deleteDiet)

// 通过点击分类获取相应分类的辅食列表
router.post('/getDietByClass',DietHandler.getDietByClass)

// 获取所有的辅食信息
router.get('/getAllDiet',DietHandler.getAllDiet)

// 通过辅食ID获取详细数据
router.get('/getDietById/:dietId',DietHandler.getDietById)


module.exports = router