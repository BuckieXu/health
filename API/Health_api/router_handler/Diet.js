const db = require('../db/index')
const { v4: uuidv4 } = require("uuid");

// 添加辅食信息
exports.addDiet = (req, res) => {
    var obj = {
        dietId: uuidv4(),      
        dietName:req.body.dietName,
        displaysrc:req.body.displaysrc,
        ageGroup:req.body.ageGroup,
        efficacy:req.body.efficacy,
        foodclass:req.body.foodclass,
        describe:req.body.describe,
        foodMaterial:req.body.foodMaterial,
        process:req.body.process
    }
    const sql=`insert into diet set ?`
    db.query(sql,obj,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({ status: 0, message: '添加成功！'})
    })
}
//修改辅食信息
exports.updateDiet=(req,res) => {
    const sql=`update diet set ? where dietId=?`
    db.query(sql,[req.body,req.params.dietId],(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '修改辅食信息失败！' })
        }
        res.send({ status: 0, message: '修改成功！'})
    })
}
// 删除辅食信息
exports.deleteDiet=(req,res) => {
    const sql=`delete from diet where dietId=?`
    db.query(sql,req.params.dietId,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '删除辅食失败！' })
        }
        res.send({ status: 0, message: '删除成功！'})
    })
}
// 通过点击分类获取相应分类的辅食列表
exports.getDietByClass=(req,res) => {
    if(req.body.class=="foodclass"){
        const sql=`select * from diet where foodclass=?`
        db.query(sql,req.body.value,(err,results) => {
            if (err) return res.send({ status: 1, message: err.message })
            res.send({
                status:0,
                message: '获取信息数据成功！',
                data:results
            })
        })
    }else if(req.body.class=="ageGroup"){
        const sql=`select * from diet where ageGroup=?`
        db.query(sql,req.body.value,(err,results) => {
            if (err) return res.send({ status: 1, message: err.message })
            res.send({
                status:0,
                message: '获取信息数据成功！',
                data:results
            })
        })
    }else{
        
       var mz="%"+req.body.value+"%"
        const sql=`select * from diet where efficacy like ?`

        db.query(sql,[mz],(err,results) => {
            if (err) return res.send({ status: 1, message: err.message })
            res.send({
                status:0,
                message: '获取信息数据成功！',
                data:results
            })
        })
    }
    
}
// 获取所有的辅食信息
exports.getAllDiet=(req,res) => {
    const sql=`select * from diet `
    db.query(sql,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({ status: 0, message: '获取成功！',data:results})
    })
}
// 通过辅食id获取数据
exports.getDietById=(req,res) => {
    const sql=`select * from diet where dietId = ?`
    db.query(sql,req.params.dietId,(err,results) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({ status: 0, message: '获取成功！',data:results})
    })
}


