const db = require('../db/index')
const { v4: uuidv4 } = require("uuid");
var moment = require('moment');
//添加日记
exports.addDiary=(req,res) => {
    const reqbody=req.body
    const obj={
        diaryid: uuidv4(),
        eventName:reqbody.eventName,
        describe:reqbody.describe,
        diary_url:reqbody.diary_url,
        create_time:new Date(),
        babyid:req.params.babyid,
        height:reqbody.height,
        weight:reqbody.weight

    }
    const sql = `insert into babydiary set ?`
    db.query(sql,obj,(err,results)=>{
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '添加日记失败，请稍后再试！' })
          }
          // 添加成功
          res.send({ status: 0, message: '添加成功！' })
    })
}
// // 修改日记
exports.updateDiary=(req,res) => {
    const reqbody=req.body
    const sql='UPDATE babydiary SET `describe`=?,`update_time`=? WHERE  diaryid=?'
    db.query(sql,[reqbody.describe,moment().format('YYYY-MM-DDTHH:mm'),req.params.diaryid],(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '修改失败，请重新输入！' })
        }
        res.send({ status: 0, message: '修改成功！' })
    })
}
// // 获取宝宝日记信息
exports.getBabyDiaryById=(req,res) => {
  const sql=`select * from babydiary where babyid=?`
  db.query(sql,[req.params.babyid],(err,results) => {
    if (err) {
        return res.send({ status: 1, message: err.message })
    }
    res.send({
        status:0,
        message: '获取宝宝日记成功！',
        data: results,
    })
  })
}
// 获取所有日记
exports.getAllDiary=(req,res) => {
    const sql=`select * from babydiary`
    db.query(sql,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({
            status:0,
            message: '获取日记成功！',
            data: results,
        })
    })
}