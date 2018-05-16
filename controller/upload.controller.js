var mongoose = require('mongoose');
var multer  = require('multer');
const fs = require('fs');
const path = require('path');
const DataModel = require('../models/upload.model');
// const DateModle = require('../models/user.model');//User模型
//设置存储路径
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    //返回文件名
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
//上传模板文件
exports.upload = function(req,res,next){
   //实例化
   var upload=multer({
        storage:storage
   }).single('myfile');
   upload(req,res,(err)=>{
        req.file.isTemplate=1;
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
    // var filePath = path.join(__dirname, fileName);
    var filePath = 'F:\\Graduation.Server\\uploads\\'+fileName;
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
            res.send("文件模板还未上传!");
            res.end();
        }
    });
 };
exports.deletes = function(req,res,next){
    var idarr=req.body.idarr;
    if(idarr.length>0){
        var s=idarr.split(",");
        DataModel.remove({_id:{$in:s}})
            .then(data=> {
            res.json({"msg":"success","status":200});
    })
    }else {
        res.json({"msg":"faild","status":404});
    }
}
exports.remove = function(req,res,next){
    const id = req.params.id;
    DataModel.findByIdAndRemove(id,function(err,data){
        res.json(data);
    })

}
exports.lists = function (req, res, next) {
    var ids = req.body.categoryId.split(",");
    if (ids.length > 0) {
        DataModel.find({categoryId: {$in: ids}}).then(data=> {
                res.json(data);
                console.log(data);
            })
    } else {
        res.json({"msg": "请求失败", "status": 404})
    }
}
exports.update = function(req,res,next){
    const id = req.params.id;

    DataModel.findByIdAndUpdate(id, {$set: req.body}, {new:false})
        .then(data=>{
        res.json(data);
})
}
//获取文档模板
exports.list = function(req,res,next){
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {"isTemplate":1};
    DataModel.find(queryCondition,function(err,data){
    if(err){ 
        consoloe.log(err);
    }else{
        res.json(data);
    }
    }).sort({ _id: -1 })       
}

