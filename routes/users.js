/**
 * 用户restful API
 * Created by Vicky on 2018/03/11.
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/user.controller');

router.post('/data',dataCtrl.create);//新增用户
router.get('/UserInfo/:id',dataCtrl.get);//单个用户查询
router.post('/CheckLogin',dataCtrl.checkLogin);//登录验证
router.put('/UpdateInfo/:id',dataCtrl.update);//修改个人信息
router.delete('/data/:id',dataCtrl.remove);//删除某个账户
router.post('/list',dataCtrl.list);//查询列表
router.post('/deletes',dataCtrl.deletes);//删除多个
module.exports = router;
