/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:40:36 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 10:12:18
 */
const DateModle = require('../models/classification.model');
//增加分类
exports.create = function (req, res, next) {
  const dataModle = new DateModle(req.body);
  dataModle.save()
    .then(data => {
      res.json(data);
    })
};
//删除某个分类
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
//修改某个分类
exports.update = function (req, res, next) {
  var _id = req.params._id;
  DateModle.findByIdAndUpdate(_id, { $set: req.body }, { new: false })
    .then(data => {
      res.json(data);
    })
}
//获取分类列表
exports.list = function (req, res, next) {
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {};
  if (req.body.classType) {
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
//获取某个分类详情
exports.get = function (req, res, next) {
  var _id = req.params._id;
  DateModle.findById(_id, function (err, data) {
    console.log(res.json(data));
    res.json(data);
  })
}




