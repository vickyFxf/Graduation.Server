/**
 * 用户restful API
 * Created by Vicky on 2018/03/11.
 */
var express = require('express');
var router = express.Router();
var dataCtrl = require('../controller/user.controller');

router.post('/data',dataCtrl.create);
router.get('/data/:id',dataCtrl.get);
router.post('/check',dataCtrl.checkLogin);
router.put('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post('/list',dataCtrl.list);
router.post('/deletes',dataCtrl.deletes);//删除多个
module.exports = router;
