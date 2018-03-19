/**
 * 课题restful API
 * Created by Vicky on 2018/03/18.
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/subject.controller');

router.post('/data',dataCtrl.create);//新增课题
router.post('/list',dataCtrl.list);//查询课题列表
router.get('/search/:_id',dataCtrl.get);//查询某个课题详情
router.delete('/del/:_id',dataCtrl.remove);//删除某个课题

module.exports = router;
