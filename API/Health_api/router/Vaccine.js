// 疫苗信息路由
const express=require('express')
const router = express.Router()
const VaccineHandler = require('../router_handler/Vaccine')

//为新注册的用户添加免疫规划疫苗
router.post('/addFreeVaccine/:babyid',VaccineHandler.addFreeVaccine)

// 获取宝宝所有疫苗信息
router.get('/getAllVaccineById/:babyid',VaccineHandler.getAllVaccineById)

// 获取所有疫苗信息
router.post('/getAllVaccine',VaccineHandler.getAllVaccine)

// 给宝宝添加疫苗
router.post('/addVaccine',VaccineHandler.addVaccine)

// 修改信息 是否接种 接种时间
router.post('/updataVaccine/:vaccineId',VaccineHandler.updataVaccine)

// 通过疫苗ID获取疫苗信息
router.post('/getVaccineByVacId/:vaccineId',VaccineHandler.getVaccineByVacId)

// 模糊查询信息
// router.get('/getVaccineByItem',VaccineHandler.getVaccineByItem)







module.exports = router