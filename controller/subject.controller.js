/**
 * 用户控制处理
 * Created by Vicky on 2018/03/11.
 */
const DateModle = require('../models/subject.model');

//新增课题
exports.create = function(req,res,next){
    const dataModle = new DateModle(req.body);
    // dataModle.save()
    //     .then(data=>{
    //         res.json(data);
    //     })
    dataModle.save((err,data)=>{
        if(err){
            res.json({"msg":"faild","status":404});
        }else{
            res.json(data);
        }
    })
};
//查所有课题列表
exports.list = function(req,res,next){
    var page = (req.body.page) ? req.body.page : 1;
    var rows = (req.body.rows) ? req.body.rows : 10;
    var queryCondition = {};
    if(req.body.creatUserId && req.body.creatUserId.trim().length>0){
        creatUserId = req.body.creatUserId;
        queryCondition = {
            "creatUserId" : new RegExp(creatUserId, 'i')
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
//修改课题信息
exports.update = function(req,res,next){
    //记住此处返回来的值是修改之前的值
    var _id = req.params._id;
    DateModle.findByIdAndUpdate(_id, {$set: req.body}, {new:false})
        .then(data=>{
            res.json(data);
    })
}
