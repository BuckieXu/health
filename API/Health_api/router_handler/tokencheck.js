const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.getUserInfo=(req,res) => {
    let bearerHeader=req.headers['authorization'];
    if (!bearerHeader) {
        res.cc("token缺失")
    }
    var bearer = bearerHeader.split(" ");
        token = bearer[1];
        // console.log(token);
        // 进行校验
    jwt.verify(token,'Bruce',(err,data) => {
        if(err){
            res.send({
                status:1,
                message:'token检验失败!!',
                data:null
                
            })
        }else{
            res.send({
                status:0,
                message:"检验成功",
                data
            })
        }
    })
    

}

exports.getBabyMsgByuserId=(req,res) => {
    let bearerHeader=req.headers['authorization'];
    if (!bearerHeader) {
        res.cc("token缺失")
    }
    var bearer = bearerHeader.split(" ");
        token = bearer[1];
        // console.log(token);
        // 进行校验
    jwt.verify(token,'Bruce',(err,data) => {
        if(err){
            res.send({
                status:1,
                message:'token检验失败!!',
                data:null
                
            })
        }else{
          const sql=`select * from babymsg where userId = ?`
          db.query(sql,data.userId,(err,results) => {
            if (err) {
                return res.send({ status: 1, message: err.message })
            }
            res.send({
                status:0,
                message: '获取宝宝信息数据成功！',
                data: results,
            })
          })
        }
    })
}
