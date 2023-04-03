const db = require('../db/index')

//添加信息
exports.addBabyMsg=(req,res) => {
    const reqbody=req.body
    const sql = `insert into babymsg set ?`
    db.query(sql,reqbody,(err,results)=>{
        if (err) return res.send({ status: 1, message: err.message })
        if (results.affectedRows !== 1) {
            return res.send({ status: 1, message: '添加信息失败，请稍后再试！' })
          }
          // 添加成功
          res.send({ status: 0, message: '添加成功！' })
    })
}
// 修改宝宝信息
exports.updateBabyMsg=(req,res) => {
    const reqbody=req.body
    // 判断要修改的宝宝是否存在
    const sql =`select * from babymsg where babyid=?`
    db.query(sql,reqbody.babyid,(err,results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        if (results.length !== 1) return res.cc('宝宝信息不存在！')
        // 存在，进行更新数据
        const sql=`update babymsg set ? where babyid=?`
        db.query(sql,[reqbody,reqbody.babyid],(err,results) => {
            if (err) {
                return res.send({ status: 1, message: err.message })
            }
            if (results.affectedRows !== 1) {
                return res.send({ status: 1, message: '修改宝宝信息失败！' })
            }
            res.send({ status: 0, message: '修改成功！' })
        })
        
    })
}
// 获取宝宝信息
exports.getBabyMsg=(req,res) => {
  const sql=`select * from babymsg where babyid=?`
  db.query(sql,req.params.id,(err,results) => {
    if (err) {
        return res.send({ status: 1, message: err.message })
    }
    res.send({
        status:0,
        message: '获取宝宝信息数据成功！',
        data: results[0],
    })
  })
}