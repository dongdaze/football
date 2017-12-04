var express = require('express');
var router = express.Router();
var db = require('../db/index');
var multiparty = require('multiparty');

//获取所有社群
router.get('/assGet', (req, res, next) => {
    db.getAssociationAll((err, result) => {
        res.json({ result })
    })
});
//增加社群
router.post('/assAdd', (req, res, next) => {
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
        db.addAssociation(
            {
                _id: fields._id[0],
                assName: fields.name[0],
                des: fields.des[0],
                startTime: fields.startTime[0],
                deassImgs: assImg,
            }, (err, result) => {
                if (result) {
                    res.json({ data: 1, des: "添加成功" })
                }
            })
    })
})
//删除社群id
router.post('/assDelete', (req, res, next) => {
    var id = req.body.id;
    db.deleteAssociationId(id, (err, result) => {
        if (result) {
            res.json({ data: 1, des: "删除成功" })
        }
    })
})
//修改社群
router.post('/assEdit', (req, res, next) => {
    var id = req.body.id;
    db.updateAssociationId(id, (err, result) => {
        if (result) {
            res.json(result)
        }
    })
})
//修改保存社群
router.post('/assEditSave', (req, res, next) => {
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
        db.assEditSaveAssociation(
            {
                _id: fields._id[0],
                assName: fields.name[0],
                des: fields.des[0],
                startTime: fields.startTime[0],
                deassImgs: assImg,
            }, (err, result) => {
                if (result) {
                    res.json({ data: 1, des: "修改成功" })
                }
            })
    })
})
module.exports = router;
