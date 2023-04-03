const express = require('express')
// 创建路由对象
const router = express.Router()
// 引入路由处理模块

const ChildKnowledgeHandler=require('../router_handler/ChildKnowledge')

//添加育儿知识
router.post("/addKnowledge",ChildKnowledgeHandler.addKnowledge)
//修改育儿知识
router.post("/updateKnowledge",ChildKnowledgeHandler.updateKnowledge) 
// 获取所有育儿知识
router.get("/getAllKnowledge/:ageGroup",ChildKnowledgeHandler.getAllKnowledge)
// 通过id获取育儿知识
router.get("/getKnowledgeById/:ChildKnowledgeId",ChildKnowledgeHandler.getKnowledgeById)

//7-24月婴幼儿喂养指南
// 添加喂养指南
router.post('/addFeedingGuideline',ChildKnowledgeHandler.addFeedingGuideline)
// 修改喂养指南
router.post('/updateFeedingGuideline',ChildKnowledgeHandler.updateFeedingGuideline)
//查询所有喂养指南
router.get('/getFeedingGuideline',ChildKnowledgeHandler.getFeedingGuideline)
// 查询指南详情
router.get('/getFeedingById/:FeedingId',ChildKnowledgeHandler.getFeedingById)
module.exports = router