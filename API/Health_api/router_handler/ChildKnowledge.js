const db = require('../db/index')
const { v4: uuidv4 } = require("uuid");
var moment = require('moment');
// 添加育儿知识
exports.addKnowledge=(req,res) => {
    const obj={
        ChildKnowledgeId:uuidv4(),  
        mainClass:req.body.mainClass,
        ageGroup:req.body.ageGroup,
        title:req.body.title,
        content:req.body.content,
        create_time:new Date(),
        Imgsrc:req.body.Imgsrc,
        document:req.body.document
    }
    const sql=`insert into childknowledge set ?`
    db.query(sql,obj,(err,results)=>{
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '添加失败，请稍后再试！' })
          }
          // 添加成功
          res.send({ status: 0, message: '添加成功！' })
    })
}
//修改育儿知识
exports.updateKnowledge=(req,res) => {
    const reqbody=req.body
    // 判断要修改的宝宝是否存在
    const sql =`select * from childknowledge where ChildKnowledgeId=?`
    db.query(sql,reqbody.ChildKnowledgeId,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.length !== 1) return res.cc('该信息不存在！')
        // 存在，进行更新数据
        const sql=`update childknowledge set ? where ChildKnowledgeId=?`
        db.query(sql,[reqbody,reqbody.ChildKnowledgeId],(err,results) => {
            if (err) {
                return res.send({ status: 1, message: err.message })
            }
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, message: '修改信息失败！' })
            }
            res.send({ status: 0, message: '修改成功！' })
        })
        
    })
}
// 获取所有育儿知识
exports.getAllKnowledge=(req,res) => {
    const sql=`select mainClass from childknowledge where ageGroup=?`
    db.query(sql,req.params.ageGroup,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        let uniqueArr = Array.from(new Set(results.map(item => item.mainClass))).map(mainClass => { 
            return results.find(item => item.mainClass === mainClass); 
        }); 
        if (results.length >0) {
                for( let i=0;i<uniqueArr.length;i++){
                    let mainClass=uniqueArr[i].mainClass
                    const kpl=`select * from childknowledge where ageGroup=? and mainClass=?`
                 db.query(kpl,[req.params.ageGroup,mainClass],(err,data) => {
                        if (err) {
                            return res.send({ status: 1, message: err.message })
                        }
                        
                        uniqueArr[i].knowledgeList=data                      
                        
                    })
                }          
                                                                 
        setTimeout(() => { 
            res.send({
                status:0,
                message: '获取数据成功！',
                data: uniqueArr,
            })
          }, 100)
       
    }

       
    })
}
// 通过ID查询育儿百科详情
exports.getKnowledgeById=(req,res) => {
    const sql=`select * from childknowledge where ChildKnowledgeId=?`
    db.query(sql,req.params.ChildKnowledgeId,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.length==0) {
            return res.send({ status: 1, message: '暂时没有数据！' })
        }
        res.send({status:0,message:'获取成功',data:results})
    })
}

//添加育儿指南
exports.addFeedingGuideline=(req,res) => {
    const reqbody=req.body
    var obj={
        FeedingId:uuidv4(),
        main:reqbody.main,
        subhead:reqbody.subhead,
        content:reqbody.content,
        ageGroup:reqbody.ageGroup,
        imgurl:reqbody.imgurl,
        updateTime:moment(Date.now()).format("YYYY-MM-DD")
    }
    const sql=`insert into feeding set ?`
    db.query(sql,obj,(err,results)=>{
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '添加失败，请稍后再试！' })
          }
          // 添加成功
          res.send({ status: 0, message: '添加成功！' })
    })
}
// 修改喂养指南
exports.updateFeedingGuideline=(req,res) => {
    const reqbody=req.body
    reqbody.updateTime=moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    const sql=`update feeding set ? where FeedingId=?`
    db.query(sql,[reqbody,reqbody.FeedingId],(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '修改信息失败！' })
        }
        res.send({ status: 0, message: '修改成功！' })
    })
}
// 查询所有喂养指南
exports.getFeedingGuideline=(req,res) => {
    const sql=`select main from feeding`
    db.query(sql,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        let uniqueArr = Array.from(new Set(results.map(item => item.main))).map(main => { 
            return results.find(item => item.main === main); 
        }); 
        if (results.length >0) {
                for( let i=0;i<uniqueArr.length;i++){
                    let main=uniqueArr[i].main
                    const kpl=`select * from feeding where main=?`
                 db.query(kpl,main,(err,data) => {
                        if (err) {
                            return res.send({ status: 1, message: err.message })
                        }
                        
                        uniqueArr[i].feedingList=data                      
                        
                    })
                }          
                                                                 
        setTimeout(() => { 
            res.send({
                status:0,
                message: '获取数据成功！',
                data: uniqueArr,
            })
          }, 100)
       
    }

       
    })
}
// 查询指南详情
exports.getFeedingById=(req,res) => {
    const sql=`select * from feeding where FeedingId=?`
    db.query(sql,req.params.FeedingId,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.length==0) {
            return res.send({ status: 1, message: '暂时没有数据！' })
        }
        res.send({status:0,message:'获取成功',data:results})
    })
}
