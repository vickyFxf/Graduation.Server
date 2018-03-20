/**
 * 课题restful API
 * Created by Vicky on 2018/03/18.
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/subject.controller');

router.post('/Add',dataCtrl.create);//新增课题
router.post('/List',dataCtrl.list);//查询课题列表
router.get('/Search/:_id',dataCtrl.get);//查询某个课题详情
router.delete('/Del/:_id',dataCtrl.remove);//删除某个课题
router.post('/Dels',dataCtrl.deletes);//删除多个课题
router.put('/Update/:_id',dataCtrl.update);//修改课题信息
module.exports = router;
