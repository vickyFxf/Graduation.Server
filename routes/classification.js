/*
 * @Author: VickyFan 
 * @Date: 2018-04-23 09:44:52 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-23 10:07:46
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/classification.controller');
router.post('/ClassAdd', dataCtrl.create);//新增分类
router.put('/ClassUpdate/:_id', dataCtrl.update);//修改某个分类
router.delete('/ClassDel/:_id', dataCtrl.remove);//删除某个分类
router.post('/ClassList', dataCtrl.list);//查询列表
router.get('/ClassDetails/:_id', dataCtrl.get);//获取某个分类详情
module.exports = router;
