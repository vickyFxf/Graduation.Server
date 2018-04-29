/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:31:49 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-25 09:46:04
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/user.controller');
router.post('/AddUser', dataCtrl.create);//新增用户
router.post('/UserInfo', dataCtrl.get);//单个用户查询
router.post('/CheckLogin', dataCtrl.checkLogin);//登录验证
router.put('/UpdateInfo/:_id', dataCtrl.update);//修改个人信息
router.delete('/DeleteUser/:_id', dataCtrl.remove);//删除某个账户
router.post('/List', dataCtrl.list);//查询列表
router.post('/deletes', dataCtrl.deletes);//删除多个
module.exports = router;
