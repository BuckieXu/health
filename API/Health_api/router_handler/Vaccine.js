const db = require('../db/index')
const { v4: uuidv4 } = require("uuid");

//添加基本疫苗
exports.addFreeVaccine = (req, res) => {
    var babyid = req.params.babyid
    var values = [
        [
            uuidv4(),
            "免疫规划疫苗",
            "0",
            "卡介苗",
            "1",
            "1",
            "未接种",
            null,
            "可预防结核病，特别是结核性脑膜炎和粟粒性结核、属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。儿童出生时接种疫苗。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "0",
            "乙肝疫苗",
            "1",
            "3",
            "未接种",
            null,
            "可预防已型病毒性肝炎(乙肝)，属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共三剂，儿童出生后24小时内接种第一剂，之后在一月龄和6月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "1",
            "乙肝疫苗",
            "2",
            "3",
            "未接种",
            null,
            "可预防已型病毒性肝炎(乙肝)，属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共三剂，儿童出生后24小时内接种第一剂，之后在一月龄和6月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "2",
            "脊髓灰质炎疫苗",
            "1",
            "4",
            "未接种",
            null,
            "可预防脊髓灰质炎（小儿麻痹症），属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共4剂，2019年12月前，国家免疫规划接种方案为2月龄接种1剂脊灰灭活疫苗(IPV)，3月龄、4月龄、4周岁个接种1剂脊灰减毒活疫苗（OPV），自2019年12月起，调整为2月龄和3月龄均接种灭活疫苗，4月龄和4周岁接种脊灰减毒活疫苗。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "3",
            "脊髓灰质炎疫苗",
            "2",
            "4",
            "未接种",
            null,
            "可预防脊髓灰质炎（小儿麻痹症），属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共4剂，2019年12月前，国家免疫规划接种方案为2月龄接种1剂脊灰灭活疫苗(IPV)，3月龄、4月龄、4周岁个接种1剂脊灰减毒活疫苗（OPV），自2019年12月起，调整为2月龄和3月龄均接种灭活疫苗，4月龄和4周岁接种脊灰减毒活疫苗。",
            babyid
        ],
        [uuidv4(),
            "免疫规划疫苗",
            "3",
            "百白破疫苗",
            "1",
            "4",
            "未接种",
            null,
            "可预防百日咳、白喉、破伤风三种疾病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共4剂，3、4、5月龄和18月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "4",
            "脊髓灰质炎疫苗",
            "3",
            "4",
            "未接种",
            null,
            "可预防脊髓灰质炎（小儿麻痹症），属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共4剂，2019年12月前，国家免疫规划接种方案为2月龄接种1剂脊灰灭活疫苗(IPV)，3月龄、4月龄、4周岁个接种1剂脊灰减毒活疫苗（OPV），自2019年12月起，调整为2月龄和3月龄均接种灭活疫苗，4月龄和4周岁接种脊灰减毒活疫苗。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "4",
            "百白破疫苗",
            "2",
            "4",
            "未接种",
            null,
            "可预防百日咳、白喉、破伤风三种疾病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共4剂，3、4、5月龄和18月龄各接种1剂。",
            babyid
        ],
        [uuidv4(),
            "免疫规划疫苗",
            "5",
            "百白破疫苗",
            "3",
            "4",
            "未接种",
            null,
            "可预防百日咳、白喉、破伤风三种疾病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共4剂，3、4、5月龄和18月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "6",
            "乙肝疫苗",
            "3",
            "3",
            "未接种",
            null,
            "可预防已型病毒性肝炎(乙肝)，属第一类疫苗、由政府免费提供、无特殊情况应按规定接种。共三剂，儿童出生后24小时内接种第一剂，之后在一月龄和6月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "6",
            "A群流脑疫苗",
            "1",
            "2",
            "未接种",
            null,
            "可预防由A群脑膜炎球菌引起的流行性脑脊髓膜炎，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共2剂，6月龄和9月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "8",
            "麻腮风疫苗",
            "1",
            "2",
            "未接种",
            null,
            "可预防麻疹、流行性腮腺炎、风疹三种儿童常见的急性呼吸道传染病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。2020年6月前，国家免疫规划接种方案为8月龄接种1剂麻风二联疫苗，18月龄接种1剂麻腮风三联疫苗。自2020年6月起，调整为8月龄和18月龄各接种1剂麻腮风疹三联疫苗。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "8",
            "乙脑疫苗",
            "1",
            "2",
            "未接种",
            null,
            "可预防l流行性乙型脑炎（乙脑）,包括乙脑减病毒活疫苗和乙脑灭活疫苗两种。目前主要接种乙脑减病毒活疫苗，共两剂，于8月龄、两周岁各接种1剂、乙脑灭活疫苗，共4剂，8月龄接种两剂，间隔7~10天,2周岁和66周岁各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "9",
            "A群流脑疫苗",
            "2",
            "2",
            "未接种",
            null,
            "可预防由A群脑膜炎球菌引起的流行性脑脊髓膜炎，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共2剂，6月龄和9月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "18",
            "麻腮风疫苗",
            "2",
            "2",
            "未接种",
            null,
            "可预防麻疹、流行性腮腺炎、风疹三种儿童常见的急性呼吸道传染病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。2020年6月前，国家免疫规划接种方案为8月龄接种1剂麻风二联疫苗，18月龄接种1剂麻腮风三联疫苗。自2020年6月起，调整为8月龄和18月龄各接种1剂麻腮风疹三联疫苗。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "18",
            "甲肝疫苗",
            "1",
            "1",
            "未接种",
            null,
            "可预防甲型病毒性肝炎（甲肝），包括甲肝减病毒活疫苗和甲肝灭活疫苗两种。甲肝减病毒活疫苗，18月龄接种一次，甲肝灭活疫苗，共两剂，18月龄和24月龄各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "24",
            "乙脑疫苗",
            "2",
            "2",
            "未接种",
            null,
            "可预防l流行性乙型脑炎（乙脑）,包括乙脑减病毒活疫苗和乙脑灭活疫苗两种。目前主要接种乙脑减病毒活疫苗，共两剂，于8月龄、两周岁各接种1剂、乙脑灭活疫苗，共4剂，8月龄接种两剂，间隔7~10天,2周岁和66周岁各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "36",
            "A+C群流脑疫苗",
            "1",
            "2",
            "未接种",
            null,
            "可预防A群，C群脑膜炎球菌引起的流行性脑脊髓膜炎（流脑），属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共两剂，3周岁、6周岁各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "72",
            "A+C群流脑疫苗",
            "2",
            "2",
            "未接种",
            null,
            "可预防A群，C群脑膜炎球菌引起的流行性脑脊髓膜炎（流脑），属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种。共两剂，3周岁、6周岁各接种1剂。",
            babyid
        ],
        [
            uuidv4(),
            "免疫规划疫苗",
            "72",
            "白破疫苗",
            "1",
            "1",
            "未接种",
            null,
            "可预防白喉、破伤风两种疾病，属于第一类疫苗，由政府免费提供、无特殊情况应按规定接种，6周岁接种1剂。",
            babyid
        ]

    ];
    // 
    const sql = `select * from vaccine where babyid= ?`
    db.query(sql, babyid, (err, results) => {
        if (err) return res.send({ status: 1, message: err.message })
        if (results.length !== 0) { res.send({ status: 1, message: "请不要重复添加",data:results }) }
        if (results.length == 0) {
            const kpl = `insert into vaccine (vaccineId,vaccineGroup,ageGroup,vaccineName,num,sum,status,inoculateDate,include,babyid) values ?`
            db.query(kpl, [values], (err, results) => {
                if (err) return res.send({ status: 1, message: err.message })
                res.send({ status: 0, message: '添加成功！',data:results })

            })
        }
    })



}
// 获取宝宝所有的疫苗信息
exports.getAllVaccineById = (req, res) => {
    sql = `select * from vaccine where babyid=?`
    db.query(sql, req.params.babyid, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        res.send({
            status: 0,
            message: '获取宝宝疫苗信息数据成功！',
            data: results,
        })
    })
}
// 获取宝宝所有的疫苗信息
exports.getAllVaccine = (req, res) => {
    console.log(123);
    sql = `select * from vaccine`
    db.query(sql, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        res.send({
            status: 0,
            message: '获取所有疫苗信息数据成功！',
            data: results,
        })
    })
}
// 给宝宝添加疫苗
exports.addVaccine = (req, res) => {
    // console.log(req.body);
    // 先查询是否已经添加该疫苗
    const sql = `select * from vaccine WHERE babyid=? AND vaccineName=? AND ageGroup=?`
    db.query(sql, [req.body.babyid, req.body.vaccineName, req.body.ageGroup], (err, results) => {
        // console.log(results.length);
        if (err) return res.send({ status: 1, message: err.message })
        if (results.length !== 0) { res.send({ status: 1, message: "请不要重复添加" }) }

        var obj = {
            vaccineId: uuidv4(),
            vaccineGroup: req.body.vaccineGroup,
            ageGroup: req.body.ageGroup,
            vaccineName: req.body.vaccineName,
            num: req.body.num,
            sum: req.body.sum,
            status: req.body.status,
            inoculateDate: req.body.inoculateDate,
            include: req.body.include,
            babyid: req.body.babyid
        }
        const kpl = `insert into vaccine set ?`
        db.query(kpl, obj, (err, result) => {   
            if (err) {
                return res.send({ status: 1, message: err.message })
            }else {
                console.log(result);
                res.send({ status: 0, message: '添加成功！', data: result })
            }

        })
    })


}
//修改信息
exports.updataVaccine = (req, res) => {
    const sql = `update vaccine set status=?,inoculateDate=? where vaccineId=?`
    db.query(sql, [req.body.status, req.body.inoculateDate, req.params.vaccineId], (err, result) => {
        if (err) return res.send({ status: 1, message: err.message })
        res.send({ status: 0, message: '修改成功！', data: result })
    })
}
// 通过疫苗id获取疫苗信息
exports.getVaccineByVacId = (req, res) => {
    console.log(req);
    sql = `select * from vaccine where vaccineId=?`
    db.query(sql, req.params.vaccineId, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        res.send({
            status: 0,
            message: '获取疫苗信息数据成功！',
            data: results,
        })
    })
}

// 模糊查询信息
// exports.getVaccineByItem=(req,res) => {
//     const sql=`select * from vaccine `
// }
