/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:34:22 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:34:22 
 */
var mongoose = require('mongoose');
var multer  = require('multer');
const fs = require('fs');
const path = require('path');
const DataModel = require('../models/myDocument.model');
//设置存储路径
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './myDocument')
    },
    //返回文件名
    filename: function (req, file, cb) {
        let a=[];
        a=file.originalname.split('.');
      cb(null, a[0]+(new Date().getTime())+'.'+a[1])
    }
  })
  
//上传模板文件
exports.upload = function(req,res,next){
   //实例化
   var upload=multer({
        storage:storage
   }).single('myfile');
   upload(req,res,(err)=>{
        req.file.studentId=req.params._id;
        req.file.teacherId=req.params._teacherId;
        req.file.docType=req.params._docType;
        const dataModel = new DataModel(req.file);
        dataModel.save()
            .then(data=>{
            res.json(data);
        })
        return res.end('上传成功')
   })
};
//下载文件
exports.downLoad = function(req,res,next){
    // 实现文件下载 
    var fileName = req.params.fileName;
    var filePath = 'F:\\Graduation.Server\\myDocument\\'+fileName;
    console.log(filePath);
    fs.exists(filePath,function(exist) {
        if(exist){
            res.set({
                "Content-type":"application/octet-stream",
                "Content-Disposition":"attachment;filename="+encodeURI(fileName)
            });
            fReadStream = fs.createReadStream(filePath);
            fReadStream.on("data",(chunk) => res.write(chunk,"binary"));
            fReadStream.on("end",function () {
                res.end();
            });
        }else{
            res.set("Content-type","text/html");
            res.send("文件还未上传");
            res.end();
        }
    });
 };
 //条件查询课题列表
exports.list = function (req, res, next) {
    var page = (req.body.page) ? req.body.page : 1;
    var rows = (req.body.rows) ? req.body.rows : 10;
    var queryCondition = {};
    //获取我的所有任务书
    if(req.body.docType&&req.body.studentId){
      docType = req.body.docType;
      studentId = req.body.studentId;
      queryCondition = {
        "docType": new RegExp(docType, 'i'),
        "studentId": studentId
      }
    }
    //获取我的所有文档
    if(req.body.studentId){
      studentId=req.body.studentId;
      queryCondition = {
        "studentId": studentId
      }
    }
    DataModel.find(queryCondition, (err, data) => {
      if (err) {
        res.json({ "msg": "faild", "status": 404 });
      } else {
        res.json(data);
      }
    }).sort({ _id: -1 });
  }