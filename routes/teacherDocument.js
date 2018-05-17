var express = require('express');
var router = express.Router();

var dataCtrl = require('../controller/teacherDocument.controller');

router.post('/Upload/_id=:_id&teacherId=:_teacherId&_docType=:_docType',dataCtrl.upload);//上传文件
router.post('/List', dataCtrl.list);//查询我的所有任务书
router.get('/DownLoad/:fileName',dataCtrl.downLoad);//下载文件
module.exports = router;