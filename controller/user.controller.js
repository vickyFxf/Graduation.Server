/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:35:07 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-24 14:43:48
 */
const DateModle = require('../models/user.model');
//增加用户
exports.create = function (req, res, next) {
  const dataModle = new DateModle(req.body);
  dataModle.save()
    .then(data => {
      res.json(data);
    })
};
//删除多个用户
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
  }}
//删除某个用户
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
//修改用户信息
exports.update = function (req, res, next) {
  //记住此处返回来的值是修改之前的值
  var _id = req.params._id;
  DateModle.findByIdAndUpdate(_id, { $set: req.body }, { new: false })
    .then(data => {
      res.json(data);
    })
}
//用户登录验证
exports.checkLogin = function (req, res, next) {
  var userId = req.body.id;
  var password = req.body.password;
  var permissions = req.body.permissions;
  var userInfo = { id: userId, password: password ,permissions:permissions}
  DateModle.findOne(userInfo, function (err, data) {
    if (data) {
      res.json(data);
    } else {
      res.json({ "msg": "用户名或密码错误", "status": 404 });
    }
  })
}
//获取用户基本信息
exports.get = function (req, res, next) {
  var queryCondition = {};
  if (req.body.id) {
    var id = req.body.id;
    queryCondition = {
      "id": id,
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
//条件查询所有用户列表
exports.list = function (req, res, next) {
  var page = (req.body.page) ? req.body.page : 1;
  var rows = (req.body.rows) ? req.body.rows : 10;
  var queryCondition = {};
  if (req.body.permissions) {
    var permissions = req.body.permissions;
    queryCondition = {
      "permissions": permissions,
    }
  }
  if (req.body.id && req.body.permissions) {
    var id = req.body.id;
    var permissions = req.body.permissions;
    queryCondition = {
      "id": id,
      "permissions": permissions,
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