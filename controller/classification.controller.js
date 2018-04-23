/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:40:36 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 09:43:32
 */
const DateModle = require('../models/classification.model');
//增加课题
exports.create = function (req, res, next) {
  const dataModle = new DateModle(req.body);
  dataModle.save()
    .then(data => {
      res.json(data);
    })
};
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
//修改某个课题
exports.update = function (req, res, next) {
  var _id = req.params._id;
  DateModle.findByIdAndUpdate(_id, { $set: req.body }, { new: false })
    .then(data => {
      res.json(data);
    })
}
//获取课题列表
exports.list = function (req, res, next) {
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {};
  if (req.body.classType && req.body.classType.trim().length > 0) {
    classType = req.body.classType;
    queryCondition = {
      "classType": new RegExp(classType, 'i')
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




