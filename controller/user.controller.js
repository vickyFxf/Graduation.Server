/**
 * 用户控制处理
 * Created by Vicky on 2018/03/11.
 */
// var mongoose = require('mongoose');
const DateModle = require('../models/user.model');

//增加用户
exports.create = function(req,res,next){
    const dataModle = new DateModle(req.body);
    dataModle.save()
        .then(data=>{
            res.json(data);
        })
};
//删除多个用户
exports.deletes = function(req,res,next){
    var idarr=req.body.idarr;
    if(idarr.length>0){
        var s=idarr.split(",");
        DateModle.remove({_id:{$in:s}})
            .then(data=> {
                res.json({"msg":"success","status":200});
            })
    }else {
        res.json({"msg":"faild","status":404});
    }
}
//删除某个用户
exports.remove =function (req,res,next) {
    const id = req.params.id;
    DateModle.findByIdAndRemove(id,function(err,data){
        if(err){
            res.json({"msg":"faild","status":404});
        }else {
            res.json({"msg":"success","status":200});
        }
    })
}
//修改用户信息
exports.update = function(req,res,next){
    //记住此处返回来的值是修改之前的值
    var id = req.params.id;
    DateModle.findByIdAndUpdate(id, {$set: req.body}, {new:false})
        .then(data=>{
            res.json(data);
    })
}
//查用户登录验证
exports.checkLogin = function(req,res,next){
    var name = req.body.name;
    var password = req.body.password;
    var data={name:name,password:password}
    DateModle.find(data, function (err, data) {
        if(data.length>0){
            res.json(data);
        }else{
            res.json({"status":"404","msg":"用户名或密码错误"})
        }
    })
}
//查用户详细信息
exports.get = function(req,res,next){
    var id = req.params.id;
    DateModle.findById(id, function (err, data) {
        res.json(data);
    })
}
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
    // DateModle.paginate(queryCondition, {sort: { _id: -1 }, page: parseInt(page), limit: parseInt(rows) }, function(err, result) {
    //     result.rows = result.docs;
    //     delete result.docs;
    //     res.json(result)
    // });
}




