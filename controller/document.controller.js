/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:34:22 
 * @Last Modified by:   VickyFan 
 * @Last Modified time: 2018-04-09 11:34:22 
 */
const DateModle = require('../models/document.model');
//新增文档
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
//修改文档信息
exports.update = function (req, res, next) {
  //记住此处返回来的值是修改之前的值
  var _id = req.params._id;
  DateModle.findByIdAndUpdate(_id, { $set: req.body }, { new: false })
    .then(data => {
      res.json(data);
    })
}
//条件查询获取我的文档
exports.list = function (req, res, next) {
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {};
  if (req.body.docStudentId && req.body.docName) {
    docStudentId = req.body.docStudentId;
    docName=req.body.docName;
    queryCondition = {
      "docStudentId": new RegExp(docStudentId, 'i'),
      "docName":new RegExp(docName, 'i'),
    }
  }
  if (req.body.docStudentId&& !req.body.docName) {
    docStudentId = req.body.docStudentId;
    queryCondition = {
      "docStudentId": new RegExp(docStudentId, 'i'),
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