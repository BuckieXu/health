const express=require('express')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
//配置跨域
const cors = require('cors')
app.use(cors())
// 解析表单数据中间件
app.use(express.urlencoded({ extended: false }))

const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
// 响应数据的中间件
app.use(function (req, res, next) {
    // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
    res.cc = function (err, status = 1) {
      res.send({
        // 状态
        status,
        // 状态描述，判断 err 是 错误对象 还是 字符串
        message: err instanceof Error ? err.message : err,
      })
    }
    next()
  })

//用户路由
const userRouter = require('./router/user')
app.use('/api',userRouter)

// 需要token检验的接口
const checkRouter = require('./router/tokencheck')
app.use('/check',checkRouter)

// 宝宝信息路由
const BabyMagRouter=require('./router/BabyMsg')
app.use('/api',BabyMagRouter)

// 日记路由
const DiaryRouter=require('./router/BabyDiary')
app.use('/api',DiaryRouter)

// 育儿知识路由
const ChildKnowledgeRouter=require('./router/ChildKnowledge')
app.use('/api/ChildKnowledge',ChildKnowledgeRouter)

// 疫苗信息路由
const VaccineRouter=require('./router/Vaccine')
app.use('/api/Vaccine',VaccineRouter)

//辅食信息路由
const DietRouter=require('./router/Diet')
app.use('/api/Diet',DietRouter)

// 宝宝运动路由
const ExerciseRouter=require('./router/Exercise')
app.use('/api/exercise',ExerciseRouter)


app.listen(3001,function () {
    console.log('api server running at http://127.0.0.1:3000')
})