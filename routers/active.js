var express = require('express');
var router = express.Router();
var db = require('../db/index')
var multiparty = require('multiparty');
router.get('/activities', (req, res, next) => {
    db.getActivitys((err, result) => {
        res.json({ result })
    })
});
router.get('/activeCheck',(req,res,next)=>{
    db.getActivitysAll((err,result)=>{
        res.json({result})
    })
});
router.post('/listActive',(req,res,next)=>{
    var id = req.body.id;
    db.getActivity(id,(err,result)=>{
        res.json({result})
    })
});
router.post('/onLineActive',(req,res,next)=>{
    var id = req.body.id;
    db.getActivityUpdate(id,(err,result)=>{
        res.json({result})
    })
});
router.post('/offononLineActive',(req,res,next)=>{
    var id = req.body.id;
    db.deleteActivity(id,(err,result)=>{
        res.json({result})
    })
});
router.post('/activeAdd', (req, res, next) => {
    var form = new multiparty.Form();
    //设置编码
    form.encoding = 'utf-8'
    //设置路径
    form.uploadDir ='./upload'
    form.parse(req, function (err, fields, files) {
        var filesTemp = JSON.stringify(files, null, 2)
        var str = files.picture[0].path;
        str = str.replace(/\\/g, "/");
        var assImg = '/' + str;
        db.addActivity(
            {
                _id:fields._id[0],
                title: fields.title[0],
                startDate: fields.startDate[0],
                endDate: fields.endDate[0],
                des: fields.des[0],
                place:fields.place[0],
                currentPeopleNumber:fields.currentPeopleNumber[0],
                tel:fields.tel[0],
                nickName:fields.nickName[0],
                authorImg:fields.authorImg[0],
                createdTime:fields.createdTime[0],
                peopleNumber:fields.peopleNumber[0],
                avatarUrl:assImg,
                associationIdTitle:fields.associationIdTitle[0],
                isAudit:(fields.isAudit[0]==="false" ? false : true)  
            },(err,result)=>{
                if(result){
                    res.json({ data: 1,des:"添加成功" })
                }     
            })
    })
})
router.post('/seeActives',(req,res,next)=>{
    var id = req.body.id;
    db.getActivityAss(id,(err,result)=>{
        res.json({result})
    })
});

module.exports = router