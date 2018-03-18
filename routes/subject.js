/**
 * 课题restful API
 * Created by Vicky on 2018/03/18.
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/subject.controller');

router.post('/list',dataCtrl.list);
router.get('/sub/:_id',dataCtrl.get);//单个用户查询

module.exports = router;
