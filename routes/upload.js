/*
 * @Author: VickyFan 
 * @Date: 2018-04-09 11:31:49 
 * @Last Modified by: VickyFan
 * @Last Modified time: 2018-04-25 09:46:04
 */
var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/upload.controller');

router.post('/Upload',dataCtrl.upload);//上传文件
router.post('/list',dataCtrl.list);
router.delete('/data/:id',dataCtrl.remove);
router.post('/deletes',dataCtrl.deletes);
router.post('/children',dataCtrl.lists);
router.put('/data/:id',dataCtrl.update);
// router.post('/list',dataCtrl.list);
// router.get('/data/:id',dataCtrl.get);
// router.put('/data/:id',dataCtrl.update);
// router.delete('/data/:id',dataCtrl.remove);
router.get('/DocumentList',dataCtrl.list);//获取模板文件
router.get('/DownLoad/:fileName',dataCtrl.downLoad);//获取模板文件
module.exports = router;
