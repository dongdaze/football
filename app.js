var express = require('express');
var swig = require('swig')
var app =express();
var bodyParser = require('body-parser');
var Cookies = require('cookies')
var cors = require('cors');
//跨越访问
app.use(cors({
    origin:['http://localhost:8080'],
    methods:['GET','POST'],
    alloweHeaders:['Conten-Type','Authorization']
}));
//这里指定了一个临时目录（上传后的文件均保存到该目录下），  

//设置cookies
app.use('/upload',express.static(__dirname+'/upload'))
app.engine('html',swig.renderFile);
//设置模板存放的目录
app.set('views','./views')
app.set('view engine','html')
swig.setDefaults({catch:false});
//这种方式设置的表单的post请求数据的格式化，同样适用于ajax添加application/x-www-form-urlencoded
//axios默认的Content-type设置的为application/json，通过这种方式发送的数据后台无法通过正常方式获取
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use('/',require('./routers/active'));
app.use('/association',require('./routers/association'));
app.use('/user',require('./routers/user'));
app.listen('8888')