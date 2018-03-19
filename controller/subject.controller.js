/**
 * 用户控制处理
 * Created by Vicky on 2018/03/11.
 */
// var mongoose = require('mongoose');
const DateModle = require('../models/subject.model');
//新增课题
exports.create = function(req,res,next){
    console.log(req.body);
    const dataModle = new DateModle(req.body);
    dataModle.save()
        .then(data=>{
            res.json(data);
        })
};
//查所有课题列表
exports.list = function(req,res,next){
    var page = (req.body.page) ? req.body.page : 1;
    var rows = (req.body.rows) ? req.body.rows : 10;
    var queryCondition = {};
    if(req.body.name && req.body.name.trim().length>0){
        name = req.body.name;
        queryCondition = {
            "name" : new RegExp(name, 'i')
        }
    }
    DateModle.find(queryCondition,(err,data)=>{
        if(err){
            res.json({"msg":"faild","status":404});
        }else{
            res.json(data);
        }
    }).sort({ _id: -1 });
}                                                                                     
//查某课题详细信息
exports.get = function(req,res,next){
    var _id = req.params._id;
    DateModle.findById(_id, function (err, data) {
        if(err){
            res.json({"msg":"faild","status":404});
        }else{
            res.json(data);
        }
    })
}
//删除某个课题
//删除某个用户
exports.remove =function (req,res,next) {
    const _id = req.params._id;
    DateModle.findByIdAndRemove(_id,function(err,data){
        if(err){
            res.json({"msg":"faild","status":404});
        }else {
            res.json({"msg":"success","status":200});
        }
    })
}
