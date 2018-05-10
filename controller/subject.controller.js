/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:34:22 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:34:22 
 */
const DateModle = require('../models/subject.model');
//新增课题
exports.create = function (req, res, next) {
  const dataModle = new DateModle(req.body);
  dataModle.save((err, data) => {
    if (err) {
      res.json({ "msg": "faild", "status": 404 });
    } else {
      res.json(data);
    }
  })
};
//条件查询课题列表
exports.list = function (req, res, next) {
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {};
  if (req.body.creatUserId && req.body.creatUserId.trim().length > 0) {
    creatUserId = req.body.creatUserId;
    queryCondition = {
      "creatUserId": new RegExp(creatUserId, 'i')
    }
  }
  if(req.body.isAudit){
    isAudit = req.body.isAudit;
    queryCondition = {
      "isAudit": isAudit
    }
  }
  if(req.body.studentId){
    studentId = req.body.studentId;
    queryCondition = {
      "studentId": studentId
    }
  }
  //获取我的学生列表
  if(req.body.creatUserId&&req.body.isAudit){
    creatUserId = req.body.creatUserId;
    isAudit = req.body.isAudit;
    queryCondition = {
      "creatUserId": new RegExp(creatUserId, 'i'),
      "isAudit": isAudit
    }
  }
  DateModle.find(queryCondition, (err, data) => {
    if (err) {
      res.json({ "msg": "faild", "status": 404 });
    } else {
      res.json(data);
    }
  }).sort({ _id: -1 });
}
//查某课题详细信息
exports.get = function (req, res, next) {
  var _id = req.params._id;
  DateModle.findById(_id, function (err, data) {
    if (err) {
      res.json({ "msg": "faild", "status": 404 });
    } else {
      res.json(data);
    }
  })
}
//删除某个课题
exports.remove = function (req, res, next) {
  const _id = req.params._id;
  DateModle.findByIdAndRemove(_id, function (err, data) {
    if (err) {
      res.json({ "msg": "faild", "status": 404 });
    } else {
      res.json({ "msg": "success", "status": 200 });
    }
  })
}
//删除多个课题
exports.deletes = function (req, res, next) {
  var idarr = req.body.idarr;
  if (idarr.length > 0) {
    var s = idarr.split(",");
    DateModle.remove({ _id: { $in: s } })
      .then(data => {
        res.json({ "msg": "success", "status": 200 });
      })
  } else {
    res.json({ "msg": "faild", "status": 404 });
  }
}
//修改课题基本信息
exports.update = function (req, res, next) {
  //记住此处返回来的值是修改之前的值
  var _id = req.params._id;
  DateModle.findByIdAndUpdate(_id, { $set: req.body }, { new: false })
    .then(data => {
      res.json(data);
    })
}
