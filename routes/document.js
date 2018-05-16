/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:31:59 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-05-11 13:22:51
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/document.controller');
router.post('/Add', dataCtrl.create);//新增文档
router.put('/Update/:_id', dataCtrl.update);//修改文档
router.post('/List', dataCtrl.list);//查询我的文档
module.exports = router;
