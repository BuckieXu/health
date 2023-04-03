const db = require('../db/index')
const { v4: uuidv4 } = require("uuid");

//添加运动处理函数
exports.addexercise = (req, res) => {
    var obj = {
        exerciseid: uuidv4(),
        exerciseClass: req.body.exerciseClass,
        exerciseName: req.body.exerciseName,
        ageGroup: req.body.ageGroup,
        describe: req.body.describe,
        imgUrl: req.body.imgUrl
    }
    const sql = `insert into exercise set ?`
    db.query(sql, obj, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({ status: 0, message: '添加成功！', data: results.data })
    })
}
// 获取运动信息
exports.getexercise = (req, res) => {
    var exerciseClass = req.body.exerciseClass
    var min = req.body.min
    var max = req.body.max
    if (exerciseClass == "全部运动") {
        const sql = `select * from exercise where ageGroup>=? and ageGroup<=?`
        db.query(sql,[min,max],(err, results) => {
            if (err) return res.send({ status: 1, message: err.message })
            res.send({ status: 0, message: '获取成功！', data: results })
        })
    } else {
        const kpl = `select * from exercise where exerciseClass=? and ageGroup>=? and ageGroup<=?`
        db.query(kpl,[exerciseClass,min,max], (err, result) => {
            if (err) return res.send({ status: 1, message: err.message })
            if (result.length == 0) return res.cc('没有数据！')
            res.send({ status: 0, message: '获取成功！', data: result })
        })
    }
}
// 通过id获取运动信息
exports.getexerciseById=(req,res) => {
    console.log(req.params.exerciseid);
    const sql=`select * from exercise where exerciseid=?`
    db.query(sql,req.params.exerciseid,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
            if (results.length == 0) return res.cc('没有数据！')
            res.send({ status: 0, message: '获取成功！', data: results })
    })
}