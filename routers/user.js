var express = require('express');
var router = express.Router();
var db = require('../db/index');
var multiparty = require('multiparty');
router.get('/userGet', (req, res, next) => {
    db.getUserAll((err, result) => {
        res.json(result)
    })
})

router.post('/add', (req, res, next) => {
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
        db.addUser(
            {
                _id: fields._id[0],
                userName: fields.userName[0],
                passWord: fields.passWord[0],
                deassImgs: assImg,
            }, (err, result) => {
                if (result) {
                    res.json({ data: 1, des: "添加成功" })
                }
            })
    })
})
router.post('/userDelete', (req, res, next) => {
    var _id = req.body.id;
    db.deleteUser(_id, (err, result) => {
        if (result) {
            res.json({ data: 1, des: "删除成功" })
        }
    })
})
module.exports = router;