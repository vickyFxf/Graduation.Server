/**
 * 用户控制处理
 * Created by Vicky on 2018/03/11.
 */
// var mongoose = require('mongoose');
const DateModle = require('../models/subject.model');

//查所有用户列表
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
//查用户详细信息
exports.get = function(req,res,next){
    var id = req.params.id;
    DateModle.findById(id, function (err, data) {
    })
}
