/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:44:52 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 09:46:44
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/classification.controller');
router.post('/ClassAdd', dataCtrl.create);//新增课题
router.put('/ClassUpdate/:_id', dataCtrl.update);//修改个人信息
router.delete('/ClassDel/:_id', dataCtrl.remove);//删除某个账户
router.post('/ClassList', dataCtrl.list);//查询列表
module.exports = router;
